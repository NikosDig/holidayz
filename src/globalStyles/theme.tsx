import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const theme = {
    colors: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        white: "var(--color-white)",
    },
    fonts: {
        body: "Montserat, Arial, sans-serif",
        heading: "Montserat,Georgia, serif",
    },
}


export const Theme = ({children}:{ children: ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;