import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import ApplicationList from "src/pages/Application/ApplicationList";
import TemplateGallery from "src/pages/Template/TemplateGallery";

function ApplicationIndex() {
  return (
    <HomePageContentWrapper>
      <ApplicationList />
      <TemplateGallery />
    </HomePageContentWrapper>
  );
}

export default ApplicationIndex;
