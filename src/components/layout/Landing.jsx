import Button from '../Button.jsx';
import ButtonCard from '../ButtonCard.jsx';
import FormSection from '../form/FormSection.jsx';
import CardPreview from '../cardPreview/CardPreview.jsx';




function Landing ({data, handleInputChange, handleImageProject, handleImageAuthor }) {


    return (
        <>
         <main className="main">
                <FormSection
                data={data}
                handleInputChange={handleInputChange}
                handleImageProject={handleImageProject}
                handleImageAuthor={handleImageAuthor}
              />
                <CardPreview data={data} />
              </main>
            <ButtonCard />
        </>
    )
}

export default Landing;