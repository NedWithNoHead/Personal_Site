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



export function AboutSkillsSection() {
  const { ref, isVisible } = useSimpleAnimation({ threshold: 0.1 });
  const { ref: aboutRef, isVisible: aboutVisible } = useSimpleAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 transition-colors"
    >
      <div className="container mx-auto px-4">


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
                  I'm Tin, a tech enthusiast with a business mind and a problem-solver's heart. My journey began in business systems analysis, where I discovered my love for turning data into insights that actually make a difference.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  What drives me? Building bridges between business challenges and technical solutions. I get genuinely excited when I can translate a complex business need into clean code or when I can show stakeholders exactly what they need to see in a dashboard I've designed.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  After working at the intersection of business and technology, I decided to deepen my technical skills through formal education in Computer Information Technology at BCIT. I've maintained a 94% GPA while building everything from microservices to media servers—and somehow became the default tech support for my entire extended family along the way.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Whether I'm optimizing database queries, containerizing applications, or automating what used to take someone hours to do manually, I find deep satisfaction in creating solutions that make work more efficient and data more meaningful.
                </motion.p>
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  When I'm not coding or analyzing data, you'll find me hiking BC trails or running popular routes like the seawall, planning my next custom PC build, or tinkering with my home server setup.
                  Let's connect and create something impactful together.
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


              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}