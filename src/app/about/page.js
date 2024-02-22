import {Container} from "@mui/material";
import styles from "@/styles/page.module.css";
import AboutMain from "@/app/about/components/AboutMain";

export default function Portfolio() {
    return (
        <>
            <Container maxWidth='true' className={styles.main}>
                <AboutMain/>
            </Container>
        </>
    )
}