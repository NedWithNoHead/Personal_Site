import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed z-50 bottom-6 right-6 flex items-center"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-background/80 backdrop-blur border border-primary/20 hover:border-primary/40 shadow-md h-10 w-10 rounded-full"
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            opacity: [1, 0.5, 1],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-full h-full flex items-center justify-center"
        >
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-amber-500" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-blue-400 absolute" />
          )}
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-blue-400" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-amber-500 absolute" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}