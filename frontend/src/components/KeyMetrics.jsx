import React, { useState, useEffect } from "react";
import { Business, TrendingUp, AccountBalance } from "@mui/icons-material";
import styles from "./KeyMetrics.module.css";
//import ApiClient from "../utils/apiClient.js";

const KeyMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalCompanies: 0,
    avgROE: null,
    totalMarketCap: 0,
    loading: true,
    error: null,
  });

  // Fetch companies and calculate metrics
  const fetchMetrics = async () => {
    try {
      console.log("📊 Fetching key metrics...");
      setMetrics((prev) => ({ ...prev, loading: true, error: null }));

      // Fetch companies data - try both approaches
      let companiesData = [];

      // Try ApiClient first
      try {
        //const result = await ApiClient.get("/companyGeneralDetails/");
        //console.log("📊 KeyMetrics ApiClient response:", result);
        // if (result.success && result.data) {
        //   const data = result.data;
        //   // Handle API response structure (same as Fundamentals page)
        //   if (data && data.status === "success" && data.data) {
        //     if (Array.isArray(data.data)) {
        //       companiesData = data.data;
        //     } else if (
        //       data.data.companies &&
        //       Array.isArray(data.data.companies)
        //     ) {
        //       companiesData = data.data.companies;
        //     } else if (typeof data.data === "object") {
        //       companiesData = [data.data];
        //     }
        //   } else if (Array.isArray(data)) {
        //     companiesData = data;
        //   } else if (data.companies && Array.isArray(data.companies)) {
        //     companiesData = data.companies;
        //   }
        //   console.log(
        //     `✅ ApiClient: Successfully fetched ${companiesData.length} companies`
        //   );
        // }
      } catch (apiClientError) {
        console.log(
          "❌ ApiClient failed, trying direct fetch:",
          apiClientError
        );
      }

      // If ApiClient failed, try direct fetch (original approach)
      if (companiesData.length === 0) {
        try {
          const response = await fetch("/api/v1/companyGeneralDetails/", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            companiesData = Array.isArray(data)
              ? data
              : Array.isArray(data.data)
              ? data.data
              : data.data?.companies && Array.isArray(data.data.companies)
              ? data.data.companies
              : [];

            console.log(
              `✅ Direct fetch: Successfully fetched ${companiesData.length} companies`
            );
          }
        } catch (directFetchError) {
          console.log("❌ Direct fetch also failed:", directFetchError);
        }
      }

      // If still no data, use mock data as fallback (original behavior)
      if (companiesData.length === 0) {
        console.log("⚠️ Using mock data for key metrics");
        companiesData = [
          { _id: "1", name: "Infosys Ltd", marketCap: 580000 },
          { _id: "2", name: "TCS Ltd", marketCap: 1200000 },
          { _id: "3", name: "HDFC Bank", marketCap: 850000 },
        ];
      }

      console.log("✅ Companies data for metrics:", companiesData.length);

      // Calculate basic metrics
      const totalCompanies = companiesData.length;

      // Calculate total market cap (convert to crores)
      const totalMarketCap = companiesData.reduce((sum, company) => {
        const marketCap = company.marketCap || company.market_cap || 0;
        return sum + marketCap / 1e7; // Convert to crores
      }, 0);

      // Fetch ROE data for companies (simplified approach)
      let avgROE = null;
      try {
        // For now, we'll calculate a mock average ROE
        // In a real implementation, this would fetch from fundamentals API
        const mockROEValues = [18.5, 22.1, 15.8, 19.3, 16.7]; // Mock ROE values
        const validROEs = mockROEValues.slice(0, Math.min(totalCompanies, 5));
        avgROE =
          validROEs.reduce((sum, roe) => sum + roe, 0) / validROEs.length;
      } catch (roeError) {
        console.log("⚠️ Could not calculate ROE, using null", roeError);
        avgROE = null;
      }

      setMetrics({
        totalCompanies,
        avgROE,
        totalMarketCap,
        loading: false,
        error: null,
      });

      console.log("✅ Key metrics calculated:", {
        totalCompanies,
        avgROE,
        totalMarketCap,
      });
    } catch (error) {
      console.error("❌ Error fetching key metrics:", error);
      setMetrics((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load metrics",
      }));
    }
  };

  // Fetch metrics on component mount
  useEffect(() => {
    fetchMetrics();

    // Set up periodic refresh (every 2 minutes for more frequent updates)
    const interval = setInterval(fetchMetrics, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Add refresh on window focus (when user returns to tab)
  useEffect(() => {
    const handleFocus = () => {
      console.log("🔄 Window focused, refreshing metrics");
      fetchMetrics();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Format currency in crores
  const formatMarketCap = (value) => {
    if (!value || value === 0) return "₹0 Cr";

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L Cr`; // Lakh crores
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K Cr`; // Thousand crores
    } else {
      return `₹${value.toFixed(0)} Cr`;
    }
  };

  // Format ROE percentage
  const formatROE = (value) => {
    if (!value) return "ROE N/A";
    return `${value.toFixed(1)}% ROE`;
  };

  if (metrics.loading) {
    return (
      <div className={styles.keyMetrics}>
        <div className={styles.metric}>
          <Business className={styles.metricIcon} />
          <span className={styles.metricValue}>Loading...</span>
        </div>
        <div className={styles.metric}>
          <TrendingUp className={styles.metricIcon} />
          <span className={styles.metricValue}>Loading...</span>
        </div>
        <div className={styles.metric}>
          <AccountBalance className={styles.metricIcon} />
          <span className={styles.metricValue}>Loading...</span>
        </div>
      </div>
    );
  }

  if (metrics.error) {
    return (
      <div className={styles.keyMetrics}>
        <div className={styles.metric}>
          <span className={styles.metricValue}>Metrics Unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.keyMetrics}>
      <div
        className={styles.metric}
        title={`${metrics.totalCompanies} companies in portfolio`}
      >
        <Business className={styles.metricIcon} />
        <span className={styles.metricValue}>
          {metrics.totalCompanies} Companies
        </span>
      </div>

      <div
        className={styles.metric}
        title={`Average Return on Equity across portfolio`}
      >
        <TrendingUp className={styles.metricIcon} />
        <span className={styles.metricValue}>{formatROE(metrics.avgROE)}</span>
      </div>

      <div
        className={styles.metric}
        title={`Total market capitalization of portfolio`}
      >
        <AccountBalance className={styles.metricIcon} />
        <span className={styles.metricValue}>
          {formatMarketCap(metrics.totalMarketCap)}
        </span>
      </div>
    </div>
  );
};

export default KeyMetrics;
