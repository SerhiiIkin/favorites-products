import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";
import Title from "../../components/Title/Title";
import Newsletter from "../../components/Newsletter/Newsletter";

const Contact = () => {
    return (
        <SectionLayout>
            <Title typeTitle="h1" titleText="Tilmelding til nyhedsbrev" />
            <Newsletter />
        </SectionLayout>
    );
};

export default Contact;
