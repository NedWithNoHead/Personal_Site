import { Card, CardContent } from "@/components/ui/card";
import { Check, ExternalLink } from "lucide-react";
import { timelineItems } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-16 md:py-24 bg-muted/30 transition-colors relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Professional Journey
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-16 md:left-[7.5rem] top-0 bottom-0 w-0.5 bg-primary/50 hidden md:block"></div>

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <div className="mb-12 last:mb-0" key={`timeline-${index}`}>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-primary text-primary font-bold z-10 text-center flex-shrink-0 text-sm md:text-base">
                  {item.year}
                </div>
                <Card className="w-full md:ml-4 animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-muted-foreground mb-1">{item.subtitle}</p>
                      )}
                      {item.duration && (
                        <p className="text-sm text-muted-foreground mb-3">{item.duration}</p>
                      )}
                    </div>

                    {item.bulletPoints.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {item.bulletPoints.map((point, i) => (
                          <li className="flex items-start" key={`point-${i}`}>
                            <Check className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.roles && item.roles.length > 0 && (
                      <div className="space-y-6">
                        {item.roles.map((role, i) => (
                          <div key={`role-${i}`} className="mb-6 last:mb-0">
                            <h4 className="font-semibold text-primary mb-2">
                              {role.title}
                            </h4>
                            <ul className="space-y-2">
                              {role.bulletPoints.map((point, j) => (
                                <li className="flex items-start" key={`role-point-${j}`}>
                                  <Check className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center mt-4"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
