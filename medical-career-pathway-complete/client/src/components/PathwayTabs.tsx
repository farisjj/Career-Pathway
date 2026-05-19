import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PathwaySection } from "@/data/pathwayDetails";

interface PathwayTabsProps {
  sections: PathwaySection[];
}

export function PathwayTabs({ sections }: PathwayTabsProps) {
  return (
    <Tabs defaultValue={sections[0]?.id} className="w-full">
      <TabsList className="grid w-full gap-2 mb-8 flex-wrap h-auto p-2 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200">
        {sections.map((section) => (
          <TabsTrigger
            key={section.id}
            value={section.id}
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {section.titleAr}
          </TabsTrigger>
        ))}
      </TabsList>

      {sections.map((section) => (
        <TabsContent key={section.id} value={section.id} className="space-y-6">
          <div className="space-y-4">
            {section.content.map((contentItem, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {contentItem.titleAr}
                </h3>

                {/* Items List */}
                {contentItem.itemsAr && contentItem.itemsAr.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {contentItem.itemsAr.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Details Table */}
                {contentItem.details && Object.keys(contentItem.details).length > 0 && (
                  <div className="overflow-x-auto" style={{ direction: 'rtl' }}>
                    <table className="w-full text-sm border-collapse" style={{ direction: 'rtl' }}>
                      <tbody>
                        {Object.entries(contentItem.details).map(([key, value], idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                            <td className="border border-blue-200 p-3 font-bold text-blue-900 w-1/3" style={{ fontFamily: "Cairo, sans-serif" }}>
                              {key}
                            </td>
                            <td className="border border-blue-200 p-3 text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
