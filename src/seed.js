import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { Asset } from './models/Asset.js';
import { Kpi } from './models/Kpi.js';
import { DataViz } from './models/DataViz.js';
import { Layout } from './models/Layout.js';
import { Storyboard } from './models/Storyboard.js';

const uri = process.env.DB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const cleanupDatabase = async () => {
  await Asset.deleteMany({});
  await Kpi.deleteMany({});
  await DataViz.deleteMany({});
  await Layout.deleteMany({});
  await Storyboard.deleteMany({});
  console.log('Database cleaned up!');
};

const seedDatabase = async () => {
  await cleanupDatabase();
  await Asset.insertMany([
    {
      id: 'asset_001',
      name: 'Revenue Growth',
      type: 'KPI',
      description: 'Tracks the percentage increase in revenue over time.',
      favorite: true,
      copyLink: 'https://example.com/kpi/revenue-growth',
    },
    {
      id: 'asset_002',
      name: 'Net Profit Margin',
      type: 'KPI',
      description: 'Measures the profitability of a company.',
      favorite: false,
      copyLink: 'https://example.com/kpi/net-profit-margin',
    },
    {
      id: 'asset_003',
      name: 'Customer Retention',
      type: 'KPI',
      description: 'Tracks the percentage of returning customers.',
      favorite: true,
      copyLink: 'https://example.com/kpi/customer-retention',
    },
    {
      id: 'asset_004',
      name: 'Customer Acquisition Cost',
      type: 'KPI',
      description: 'Measures the cost of acquiring a new customer.',
      favorite: false,
      copyLink: 'https://example.com/kpi/customer-acquisition-cost',
    },
    {
      id: 'asset_005',
      name: 'Sales Conversion Rate',
      type: 'KPI',
      description: 'Measures the percentage of leads that convert to sales.',
      favorite: true,
      copyLink: 'https://example.com/kpi/sales-conversion-rate',
    },
    {
      id: 'asset_006',
      name: 'Net Promoter Score',
      type: 'KPI',
      description: 'Measures customer loyalty and satisfaction.',
      favorite: false,
      copyLink: 'https://example.com/kpi/net-promoter-score',
    },
  ]);

  await Kpi.insertMany([
    {
      id: 'kpi_001',
      name: 'Revenue Growth',
      businessQuestions: ['How has revenue changed over the past year?'],
      metricID: 'RG_2024',
      description:
        'Revenue Growth KPI tracks the percentage change in total revenue.',
      calculation:
        '(Current Revenue - Previous Revenue) / Previous Revenue * 100',
      visuals: ['Bar Chart', 'Line Graph'],
      applicableAffiliates: ['North America', 'Europe'],
    },
    {
      id: 'kpi_002',
      name: 'Net Profit Margin',
      businessQuestions: [
        'What is the net profit margin for the last quarter?',
      ],
      metricID: 'NPM_2024',
      description:
        'Net Profit Margin KPI measures the profitability of a company.',
      calculation: '(Net Profit / Revenue) * 100',
      visuals: ['Pie Chart', 'Bar Chart'],
      applicableAffiliates: ['Global'],
    },
    {
      id: 'kpi_003',
      name: 'Customer Retention',
      businessQuestions: [
        'What is the customer retention rate over the past year?',
      ],
      metricID: 'CR_2024',
      description:
        'Customer Retention KPI tracks the percentage of returning customers.',
      calculation: '(Number of Returning Customers / Total Customers) * 100',
      visuals: ['Line Graph', 'Heat Map'],
      applicableAffiliates: ['North America', 'Asia'],
    },
    {
      id: 'kpi_004',
      name: 'Customer Acquisition Cost',
      businessQuestions: ['How much does it cost to acquire a new customer?'],
      metricID: 'CAC_2024',
      description:
        'Customer Acquisition Cost KPI measures the cost of acquiring a new customer.',
      calculation: 'Total Marketing Spend / Number of New Customers',
      visuals: ['Bar Chart', 'Scatter Plot'],
      applicableAffiliates: ['Europe', 'South America'],
    },
    {
      id: 'kpi_005',
      name: 'Sales Conversion Rate',
      businessQuestions: ['What is the conversion rate of sales leads?'],
      metricID: 'SCR_2024',
      description:
        'Sales Conversion Rate KPI measures the percentage of leads that convert to sales.',
      calculation: '(Number of Sales / Number of Leads) * 100',
      visuals: ['Radar Chart', 'Line Graph'],
      applicableAffiliates: ['Global'],
    },
    {
      id: 'kpi_006',
      name: 'Net Promoter Score',
      businessQuestions: ['What is the Net Promoter Score for our product?'],
      metricID: 'NPS_2024',
      description:
        'Net Promoter Score KPI measures customer loyalty and satisfaction.',
      calculation: 'Percentage of Promoters - Percentage of Detractors',
      visuals: ['Bar Chart', 'Pie Chart'],
      applicableAffiliates: ['North America', 'Europe'],
    },
  ]);

  await DataViz.insertMany([
    {
      id: 'data_viz_001',
      name: 'Customer Retention Rate',
      applicableKPIs: ['Customer Churn', 'Repeat Purchase Rate'],
      description:
        'This visualization shows the percentage of customers returning after their first purchase.',
      chart: {
        type: 'Line Chart',
        dataPoints: [
          { month: 'Jan', retentionRate: 80 },
          { month: 'Feb', retentionRate: 78 },
          { month: 'Mar', retentionRate: 79 },
        ],
      },
    },
    {
      id: 'data_viz_002',
      name: 'Revenue Growth Over Time',
      applicableKPIs: ['Revenue Growth'],
      description:
        'This visualization shows the percentage increase in revenue over time.',
      chart: {
        type: 'Bar Chart',
        dataPoints: [
          { month: 'Jan', revenueGrowth: 5 },
          { month: 'Feb', revenueGrowth: 7 },
          { month: 'Mar', revenueGrowth: 6 },
        ],
      },
    },
    {
      id: 'data_viz_003',
      name: 'Net Profit Margin Analysis',
      applicableKPIs: ['Net Profit Margin'],
      description:
        'This visualization shows the net profit margin for the last quarter.',
      chart: {
        type: 'Pie Chart',
        dataPoints: [
          { category: 'Profit', value: 30 },
          { category: 'Expenses', value: 70 },
        ],
      },
    },
    {
      id: 'data_viz_004',
      name: 'Customer Acquisition Cost Breakdown',
      applicableKPIs: ['Customer Acquisition Cost'],
      description:
        'This visualization shows the cost of acquiring new customers.',
      chart: {
        type: 'Scatter Plot',
        dataPoints: [
          { month: 'Jan', cost: 50 },
          { month: 'Feb', cost: 45 },
          { month: 'Mar', cost: 55 },
        ],
      },
    },
    {
      id: 'data_viz_005',
      name: 'Sales Conversion Rate Trends',
      applicableKPIs: ['Sales Conversion Rate'],
      description:
        'This visualization shows the conversion rate of sales leads over time.',
      chart: {
        type: 'Radar Chart',
        dataPoints: [
          { month: 'Jan', conversionRate: 10 },
          { month: 'Feb', conversionRate: 12 },
          { month: 'Mar', conversionRate: 11 },
        ],
      },
    },
    {
      id: 'data_viz_006',
      name: 'Net Promoter Score Distribution',
      applicableKPIs: ['Net Promoter Score'],
      description:
        'This visualization shows the distribution of Net Promoter Scores.',
      chart: {
        type: 'Bar Chart',
        dataPoints: [
          { score: 'Promoters', percentage: 60 },
          { score: 'Passives', percentage: 30 },
          { score: 'Detractors', percentage: 10 },
        ],
      },
    },
  ]);

  await Layout.insertMany([
    {
      id: 'layout_001',
      name: 'Quarterly Financial Report',
      description: 'A comprehensive report on quarterly financial performance.',
      pages: 5,
      KPIsUsed: ['Revenue Growth', 'Net Profit Margin'],
      preview: 'https://example.com/preview/quarterly-report',
    },
    {
      id: 'layout_002',
      name: 'Annual Performance Dashboard',
      description: 'A detailed dashboard showing annual performance metrics.',
      pages: 10,
      KPIsUsed: ['Customer Retention', 'Sales Conversion Rate'],
      preview: 'https://example.com/preview/annual-dashboard',
    },
    {
      id: 'layout_003',
      name: 'Marketing Campaign Overview',
      description:
        'Overview of the performance of various marketing campaigns.',
      pages: 3,
      KPIsUsed: ['Customer Acquisition Cost', 'Net Promoter Score'],
      preview: 'https://example.com/preview/marketing-campaign',
    },
    {
      id: 'layout_004',
      name: 'Sales Funnel Analysis',
      description: 'Analysis of the sales funnel and conversion rates.',
      pages: 4,
      KPIsUsed: ['Sales Conversion Rate', 'Customer Retention'],
      preview: 'https://example.com/preview/sales-funnel',
    },
    {
      id: 'layout_005',
      name: 'Customer Journey Map',
      description: 'Mapping the customer journey and key touchpoints.',
      pages: 6,
      KPIsUsed: ['Customer Retention', 'Net Promoter Score'],
      preview: 'https://example.com/preview/customer-journey',
    },
    {
      id: 'layout_006',
      name: 'Product Performance Report',
      description: 'Report on the performance of various products.',
      pages: 8,
      KPIsUsed: ['Revenue Growth', 'Net Profit Margin'],
      preview: 'https://example.com/preview/product-performance',
    },
  ]);

  await Storyboard.insertMany([
    {
      id: 'storyboard_001',
      name: 'E-commerce Performance Overview',
      description: 'Overview of key performance indicators for e-commerce.',
      coupledKPIs: ['Customer Retention', 'Conversion Rate'],
      applicableAffiliates: ['USA', 'Europe'],
      requestAccess: true,
    },
    {
      id: 'storyboard_002',
      name: 'User Onboarding Experience',
      description:
        'Analysis of the user onboarding process and its effectiveness.',
      coupledKPIs: ['Customer Acquisition Cost', 'Net Promoter Score'],
      applicableAffiliates: ['Global'],
      requestAccess: false,
    },
    {
      id: 'storyboard_003',
      name: 'Subscription Renewal Process',
      description:
        'Insights into the subscription renewal process and customer retention.',
      coupledKPIs: ['Customer Retention', 'Revenue Growth'],
      applicableAffiliates: ['North America', 'Asia'],
      requestAccess: true,
    },
    {
      id: 'storyboard_004',
      name: 'Product Feature Adoption',
      description: 'Tracking the adoption rate of new product features.',
      coupledKPIs: ['Net Promoter Score', 'Sales Conversion Rate'],
      applicableAffiliates: ['Europe', 'South America'],
      requestAccess: false,
    },
    {
      id: 'storyboard_005',
      name: 'Customer Support Workflow',
      description:
        'Evaluation of the customer support workflow and its impact on retention.',
      coupledKPIs: ['Customer Retention', 'Net Promoter Score'],
      applicableAffiliates: ['USA', 'Europe'],
      requestAccess: true,
    },
    {
      id: 'storyboard_006',
      name: 'Marketing Campaign Effectiveness',
      description: 'Assessment of the effectiveness of marketing campaigns.',
      coupledKPIs: ['Customer Acquisition Cost', 'Revenue Growth'],
      applicableAffiliates: ['Global'],
      requestAccess: false,
    },
  ]);

  console.log('Database seeded!');
  mongoose.connection.close();
};

// Run seeding function
seedDatabase();
