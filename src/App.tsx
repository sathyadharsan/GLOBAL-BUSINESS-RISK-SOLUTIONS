import { Suspense, lazy, Component, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatbotProvider } from '@/components/chatbot/ChatbotProvider';

function PageLoadingSkeleton() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-violet-600 animate-spin"
            style={{ animationDuration: "0.8s" }}
          />
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error('Page error:', error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="p-8 text-center">Something went wrong loading this page.</div>;
    }
    return this.props.children;
  }
}

// Lazy load pages
const AboutUs = lazy(() => import('./pages/AboutUs'));
const AboutUsSlugDetail = lazy(() => import('./pages/AboutUs/SlugDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Ecosystem = lazy(() => import('./pages/Ecosystem'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustriesSlugDetail = lazy(() => import('./pages/Industries/SlugDetail'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightsSlugDetail = lazy(() => import('./pages/Insights/SlugDetail'));
const OfferingsCategoryCategoryDetail = lazy(() => import('./pages/Offerings/Category/CategoryDetail'));
const Offerings = lazy(() => import('./pages/Offerings'));
const OfferingsSlugDetail = lazy(() => import('./pages/Offerings/SlugDetail'));
const Outcomes = lazy(() => import('./pages/Outcomes'));
const OutcomesSlugDetail = lazy(() => import('./pages/Outcomes/SlugDetail'));
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const PlatformSlugDetail = lazy(() => import('./pages/Platform/SlugDetail'));
const Risks = lazy(() => import('./pages/Risks'));
const RisksSlugDetail = lazy(() => import('./pages/Risks/SlugDetail'));
const SolutionsAlternativeRiskTransfer = lazy(() => import('./pages/Solutions/AlternativeRiskTransfer'));
const SolutionsEmergingRiskSolutions = lazy(() => import('./pages/Solutions/EmergingRiskSolutions'));
const SolutionsFinancialTransactionRisk = lazy(() => import('./pages/Solutions/FinancialTransactionRisk'));
const SolutionsLiabilityGovernance = lazy(() => import('./pages/Solutions/LiabilityGovernance'));
const Solutions = lazy(() => import('./pages/Solutions'));
const SolutionsPropertyAssetProtection = lazy(() => import('./pages/Solutions/PropertyAssetProtection'));
const SolutionsSlugDetail = lazy(() => import('./pages/Solutions/SlugDetail'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoadingSkeleton />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us/:slug" element={<AboutUsSlugDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustriesSlugDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightsSlugDetail />} />
              <Route path="/offerings/category/:category" element={<OfferingsCategoryCategoryDetail />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/offerings/:slug" element={<OfferingsSlugDetail />} />
              <Route path="/outcomes" element={<Outcomes />} />
              <Route path="/outcomes/:slug" element={<OutcomesSlugDetail />} />
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/platform/:slug" element={<PlatformSlugDetail />} />
              <Route path="/risks" element={<Risks />} />
              <Route path="/risks/:slug" element={<RisksSlugDetail />} />
              <Route path="/solutions/alternative-risk-transfer" element={<SolutionsAlternativeRiskTransfer />} />
              <Route path="/solutions/emerging-risk-solutions" element={<SolutionsEmergingRiskSolutions />} />
              <Route path="/solutions/financial-transaction-risk" element={<SolutionsFinancialTransactionRisk />} />
              <Route path="/solutions/liability-governance" element={<SolutionsLiabilityGovernance />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/property-asset-protection" element={<SolutionsPropertyAssetProtection />} />
              <Route path="/solutions/:slug" element={<SolutionsSlugDetail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
}

function App() {
  console.log("App mounted");
  return (
    <Router>
      <div className="min-h-full flex flex-col font-sans">
        <Navbar />
        <ChatbotProvider>
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
        </ChatbotProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
