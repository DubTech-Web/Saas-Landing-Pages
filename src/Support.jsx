import {Star,Activity,PieChart,Share2} from "lucide-react";
import Features from "./Features";
export default function Support() {
    return (
      <div className="bg-[#F9F8FE]">
      <section className="max-w-7xl mx-7 py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How we support our partner all over the world
          </h2>
          <p className="text-gray-600 mb-8">
            SaaS becomes a common delivery model for many business applications,
            including office software, messaging software, payroll processing
            software, DBMS software, and management software.
          </p>
  
      
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="flex justify-center mb-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20}/>
                ))}
              </div>
              <p className="text-lg font-semibold">4.9 / 5 rating</p>
              <p className="text-gray-500">databricks</p>
            </div>
  
            <div className="text-center">
              <div className="flex justify-center mb-2 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={20} />
                ))}
                <Star size={20} className="text-gray-300" />
              </div>
              <p className="text-lg font-semibold">4.8 / 5 rating</p>
              <p className="text-gray-500">Chainalysis</p>
            </div>
          </div>
        </div>
  

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-white p-3 rounded-lg shadow-black">
              <Activity className="text-[#54BD95]" />
            </div>
            <div>
              <h4 className="text-lg font-[700] text-[#191A15]">Publishing</h4>
              <p className="text-[#A6A6A6]">
                Plan, collaborate, and publish your content that drives meaningful
                engagement and growth for your brand.
              </p>
            </div>
          </div>
  
          <div className="flex items-start space-x-4">
            <div className="bg-white p-3 rounded-lg">
              <PieChart className="text-[#54BD95]" />
            </div>
            <div>
              <h4 className="text-lg font-[700] text-[#191A15]">Analytics</h4>
              <p className="text-[#A6A6A6]">
                Analyze your performance and create gorgeous reports.
              </p>
            </div>
          </div>
  
          
          <div className="flex items-start space-x-4">
            <div className="bg-white p-3 rounded-lg">
              <Share2 className="text-[#54BD95]" />
            </div>
            <div>
              <h4 className="text-lg font-[700] text-[#191A15]">Engagement</h4>
              <p className="text-[#A6A6A6]">
                Quickly navigate and engage with your audience.
              </p>
            </div>
          </div>
        </div>
        
      </section>
      <Features />
      </div>
    );
  }
  