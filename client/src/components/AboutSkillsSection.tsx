import { Card, CardContent } from "@/components/ui/card";
import { Check, User, Code, LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useSimpleAnimation } from "@/hooks/use-simple-animation";

// Custom skill progress component
function SkillProgress({ value, label }: { value: number; label: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-medium text-primary">{value}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function AboutSkillsSection() {
  const { ref, isVisible } = useSimpleAnimation({ threshold: 0.1 });
  const { ref: aboutRef, isVisible: aboutVisible } = useSimpleAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-3 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me & My Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            A brief introduction about who I am and the skills I've acquired throughout my career.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* About Section */}
          <motion.div 
            className="lg:w-1/2"
            ref={aboutRef}
            initial={{ opacity: 0, x: -50 }}
            animate={aboutVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                About Me
              </h2>
            </div>
            
            <Card className="h-full shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I thrive at the intersection of business and technology, bringing a unique 
                  perspective that combines financial acumen with technical expertise. As a 
                  Computer Information Technology graduate with a strong foundation in Business 
                  Administration, I've built a career translating complex business needs into 
                  elegant technological solutions.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  My journey from financial analysis to data engineering has equipped me with 
                  the rare ability to communicate effectively across departments, understand 
                  stakeholder requirements at their core, and implement systems that drive 
                  measurable business results.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Whether optimizing database performance, automating financial processes, or 
                  creating insightful dashboards that inform critical decisions, I'm committed 
                  to delivering solutions that enhance operational efficiency and provide 
                  meaningful business intelligence.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Skills & Expertise
              </h2>
            </div>
            
            <Card className="h-full shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <Accordion type="single" collapsible defaultValue="data" className="shadow-none">
                  {skillCategories.map((category, idx) => (
                    <AccordionItem 
                      value={category.id} 
                      key={category.id}
                      className="border-b border-border last:border-0"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                      >
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary no-underline py-4">
                          <div className="flex items-center">
                            <span className="text-primary mr-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                              {idx + 1}
                            </span>
                            {category.title}
                          </div>
                        </AccordionTrigger>
                      </motion.div>
                      <AccordionContent className="pt-2 pb-4">
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={isVisible ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.skills.map((skill, i) => (
                              <motion.li 
                                className="flex items-center text-muted-foreground" 
                                key={`${category.id}-skill-${i}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, delay: 0.05 * i }}
                              >
                                <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                                <span>{skill}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Core competencies with progress bars */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Core Competencies</h3>
                  <SkillProgress value={90} label="Data Engineering & Analytics" />
                  <SkillProgress value={85} label="Financial Analysis" />
                  <SkillProgress value={80} label="Business Process Optimization" />
                  <SkillProgress value={88} label="Cross-functional Communication" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}