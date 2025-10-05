import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Business,
  Assessment,
  ArrowForward,
  Refresh,
  Schedule,
  School,
  People,
  CalendarToday,
  MoreVert,
  Print,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Star,
  EmojiEvents,
  AutoAwesome,
  Psychology,
  Lightbulb,
  Rocket,
  Favorite,
  Group,
  Timeline,
  Speed,
} from "@mui/icons-material";
import styles from "./StartApp.module.css";

const HeroSection = () => (
  <div className={styles.heroSection}>
    <div className={styles.heroContent}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          Welcome to{" "}
          <span className={styles.academyName}>TRUE Learning Hub</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Where every student's journey transforms into excellence
          <br />
          <span className={styles.highlight}>
            Transforming Realities Unleashing Excellence - An Institute for
            Modern Learning
          </span>
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>
            <Rocket className={styles.buttonIcon} />
            Start Learning
          </button>
          <button className={styles.secondaryButton}>
            <Group className={styles.buttonIcon} />
            Join Community
          </button>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroImage}>
          <img
            src="/Students_01.png"
            alt="Diverse students learning together at TRUE Learning Hub"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.floatingElements}>
          <div className={styles.floatingCard}>
            <Star className={styles.floatingIcon} />
            <span>Excellence</span>
          </div>
          <div className={styles.floatingCard}>
            <EmojiEvents className={styles.floatingIcon} />
            <span>Achievement</span>
          </div>
          <div className={styles.floatingCard}>
            <Psychology className={styles.floatingIcon} />
            <span>Growth</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className={styles.statsSection}>
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <School className={styles.icon} />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statNumber}>1,250+</div>
          <div className={styles.statLabel}>Active Students</div>
        </div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <People className={styles.icon} />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statNumber}>85</div>
          <div className={styles.statLabel}>Expert Teachers</div>
        </div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <EmojiEvents className={styles.icon} />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statNumber}>95%</div>
          <div className={styles.statLabel}>Success Rate</div>
        </div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <Lightbulb className={styles.icon} />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statNumber}>45</div>
          <div className={styles.statLabel}>Courses Available</div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCards = () => (
  <div className={styles.featuresSection}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Why TRUE Learning Hub Works</h2>
      <p className={styles.sectionSubtitle}>
        Where every student's journey transforms into excellence
        <br />
        <span className={styles.subtitleHighlight}>
          Empowering students with personalized learning experiences
        </span>
      </p>
    </div>
    <div className={styles.featuresGrid}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Timeline className={styles.icon} />
        </div>
        <h3 className={styles.featureTitle}>Personalized Learning</h3>
        <p className={styles.featureDescription}>
          Adaptive learning paths that adjust to each student's pace and
          learning style.
        </p>
        <div className={styles.featureImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderText}>
              <Timeline className={styles.placeholderIcon} />
              <p>Learning Path Visualization</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Assessment className={styles.icon} />
        </div>
        <h3 className={styles.featureTitle}>Trusted Content</h3>
        <p className={styles.featureDescription}>
          Curriculum designed by education experts and aligned with academic
          standards.
        </p>
        <div className={styles.featureImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderText}>
              <Assessment className={styles.placeholderIcon} />
              <p>Quality Content Library</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Speed className={styles.icon} />
        </div>
        <h3 className={styles.featureTitle}>Teacher Empowerment</h3>
        <p className={styles.featureDescription}>
          Advanced tools and analytics to help teachers support every student
          effectively.
        </p>
        <div className={styles.featureImage}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderText}>
              <Speed className={styles.placeholderIcon} />
              <p>Teacher Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StudentSpotlight = () => (
  <div className={styles.spotlightSection}>
    <div className={styles.spotlightContent}>
      <div className={styles.spotlightImage}>
        <img
          src="/Students_01.png"
          alt="Diverse students learning together at TRUE Learning Hub"
          className={styles.spotlightImg}
        />
      </div>
      <div className={styles.spotlightText}>
        <h2 className={styles.spotlightTitle}>
          Differentiate your classroom and engage every student
        </h2>
        <p className={styles.spotlightDescription}>
          We empower teachers to support their entire classroom. 90% of teachers
          who have used TRUE Learning Hub have found us effective.
        </p>
        <div className={styles.spotlightStats}>
          <div className={styles.spotlightStat}>
            <div className={styles.spotlightNumber}>90%</div>
            <div className={styles.spotlightLabel}>Teacher Satisfaction</div>
          </div>
          <div className={styles.spotlightStat}>
            <div className={styles.spotlightNumber}>95%</div>
            <div className={styles.spotlightLabel}>Student Engagement</div>
          </div>
        </div>
        <button className={styles.spotlightButton}>
          <People className={styles.buttonIcon} />
          Teachers, start here
        </button>
      </div>
    </div>
  </div>
);

const QuickStats = () => (
  <div className={styles.quickStatsSection}>
    <div className={styles.quickStatsGrid}>
      <div className={styles.quickStatCard}>
        <div className={styles.quickStatIcon}>
          <Schedule className={styles.icon} />
        </div>
        <div className={styles.quickStatContent}>
          <div className={styles.quickStatNumber}>116</div>
          <div className={styles.quickStatLabel}>Hours Spent</div>
        </div>
      </div>

      <div className={styles.quickStatCard}>
        <div className={styles.quickStatIcon}>
          <TrendingUp className={styles.icon} />
        </div>
        <div className={styles.quickStatContent}>
          <div className={styles.quickStatNumber}>76%</div>
          <div className={styles.quickStatLabel}>Overall Result</div>
        </div>
      </div>

      <div className={styles.quickStatCard}>
        <div className={styles.quickStatIcon}>
          <School className={styles.icon} />
        </div>
        <div className={styles.quickStatContent}>
          <div className={styles.quickStatNumber}>92%</div>
          <div className={styles.quickStatLabel}>Attendance</div>
        </div>
      </div>
    </div>
  </div>
);

// Graphs Section Component
const GraphsSection = () => {
  // Learning Path Visualization Data
  const learningPathData = [
    { name: "Week 1", completed: 85, total: 100 },
    { name: "Week 2", completed: 92, total: 100 },
    { name: "Week 3", completed: 78, total: 100 },
    { name: "Week 4", completed: 95, total: 100 },
    { name: "Week 5", completed: 88, total: 100 },
    { name: "Week 6", completed: 94, total: 100 },
  ];

  // Quality Content Library Data
  const contentLibraryData = [
    {
      subject: "Mathematics",
      videos: 120,
      documents: 85,
      quizzes: 45,
      total: 250,
    },
    { subject: "Science", videos: 98, documents: 72, quizzes: 38, total: 208 },
    { subject: "English", videos: 75, documents: 95, quizzes: 52, total: 222 },
    { subject: "History", videos: 65, documents: 88, quizzes: 28, total: 181 },
    {
      subject: "Geography",
      videos: 55,
      documents: 70,
      quizzes: 35,
      total: 160,
    },
  ];

  // Performance Analytics Data
  const performanceData = [
    { name: "Jan", avgScore: 78, topPerformer: 95 },
    { name: "Feb", avgScore: 82, topPerformer: 97 },
    { name: "Mar", avgScore: 85, topPerformer: 98 },
    { name: "Apr", avgScore: 88, topPerformer: 99 },
    { name: "May", avgScore: 91, topPerformer: 100 },
    { name: "Jun", avgScore: 89, topPerformer: 98 },
  ];

  // Learning Progress Pie Data
  const progressData = [
    { name: "Completed", value: 65, color: "#10b981" },
    { name: "In Progress", value: 25, color: "#3b82f6" },
    { name: "Not Started", value: 10, color: "#e5e7eb" },
  ];

  return (
    <div className={styles.graphsSection}>
      <div className={styles.graphsHeader}>
        <h2 className={styles.graphsTitle}>Learning Analytics Dashboard</h2>
        <p className={styles.graphsSubtitle}>
          Track progress, analyze performance, and optimize learning outcomes
        </p>
      </div>

      <div className={styles.graphsGrid}>
        {/* Learning Path Visualization */}
        <div className={styles.graphCard}>
          <div className={styles.graphCardHeader}>
            <div className={styles.graphIcon}>
              <Timeline className={styles.icon} />
            </div>
            <div className={styles.graphCardTitle}>
              <h3>Learning Path Visualization</h3>
              <p>Weekly completion rates</p>
            </div>
          </div>
          <div className={styles.graphContainer}>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={learningPathData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#10b981"
                  fill="url(#learningGradient)"
                  strokeWidth={3}
                />
                <defs>
                  <linearGradient
                    id="learningGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quality Content Library */}
        <div className={styles.graphCard}>
          <div className={styles.graphCardHeader}>
            <div className={styles.graphIcon}>
              <Assessment className={styles.icon} />
            </div>
            <div className={styles.graphCardTitle}>
              <h3>Quality Content Library</h3>
              <p>Subject-wise resource distribution</p>
            </div>
          </div>
          <div className={styles.graphContainer}>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={contentLibraryData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="subject" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="videos"
                  stackId="a"
                  fill="#3b82f6"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="documents"
                  stackId="a"
                  fill="#10b981"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="quizzes"
                  stackId="a"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className={styles.graphCard}>
          <div className={styles.graphCardHeader}>
            <div className={styles.graphIcon}>
              <Speed className={styles.icon} />
            </div>
            <div className={styles.graphCardTitle}>
              <h3>Performance Analytics</h3>
              <p>Average vs top performer scores</p>
            </div>
          </div>
          <div className={styles.graphContainer}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="avgScore"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  name="Average Score"
                />
                <Line
                  type="monotone"
                  dataKey="topPerformer"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                  name="Top Performer"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Learning Progress */}
        <div className={styles.graphCard}>
          <div className={styles.graphCardHeader}>
            <div className={styles.graphIcon}>
              <TrendingUp className={styles.icon} />
            </div>
            <div className={styles.graphCardTitle}>
              <h3>Learning Progress</h3>
              <p>Overall completion status</p>
            </div>
          </div>
          <div className={styles.graphContainer}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={progressData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {progressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StartApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.dashboardContent}>
          <HeroSection />
          <StatsSection />
          <FeatureCards />
          <StudentSpotlight />
          <QuickStats />
          <GraphsSection />
        </div>
      </div>
    </div>
  );
};

export default StartApp;
