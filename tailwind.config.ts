import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  animation: {
			"meteor-effect": "meteor 5s linear infinite",
			"bounce-effect": "bounce 4s ease-in-out infinite",
			"gelatine-effect":"gelatine 2s infinite",
			"bounce2-effect":" bounce2 2s ease infinite"
		  },
		  keyframes: {
			meteor: {
			  "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
			  "70%": { opacity: "1" },
			  "100%": {
				transform: "rotate(215deg) translateX(-500px)",
				opacity: "0",
			  },
			},
			bounce:{
			 "0%": { transform: "scale(1)" },
			  "15%": { transform: "scale(0.95)" }, 
			  "30%": { transform: "scale(1)" },
			  "50%": { opacity: "1", transform: "scale(1.1)" },
			  "100%": { opacity: "0", transform: "scale(0.3)" },
			},
			gelatine: {
			  "from, to": { transform: "scale(1, 1)" },
			  "25%": { transform: "scale(0.9, 0.9)" },
			  "50%": { transform: "scale(1.1, 0.8)" },
			  "75%": { transform: "scale(0.95, 1.05)" },
			},
			bounce2: {
			  "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
			  "40%": { transform: "translateY(-30px)" },
			  "60%": { transform: "translateY(-15px)" }
			},
			
			
		  
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
