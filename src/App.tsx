import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Cleanses from "./pages/Cleanses";
import Blog from "./pages/Blog";
import FindUs from "./pages/FindUs";
import Catering from "./pages/Catering";
import ProductInformation from "./pages/ProductInformation";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cleanses" element={<Cleanses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/product-information" element={<ProductInformation />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
