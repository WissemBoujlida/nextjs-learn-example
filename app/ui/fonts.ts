import { Inter, Lusitana } from "next/font/google"; // Import the Inter font from the next/font/google module

// specify what subset you'd like to load. In this case, 'latin'
// a subset is a subset of a font—a file that contains a custom (and usually limited) collection of glyphs wishing to optimize the file size of a web font.
export const inter = Inter({ subsets: ["latin"] });

// specify what subset you'd like to load. In this case, 'latin'
// specify different font weights. For example, 400 (normal) and 700 (bold).
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
