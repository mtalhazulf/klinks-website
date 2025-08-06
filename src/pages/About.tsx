import { CompanyStorySection } from '@/components/Sections/CompanyStorySection'

function About() {
  return (
    <div>
      <div className="bg-background py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About K-Links</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your Trusted Partner in Electrical Excellence</p>
      </div>
      <CompanyStorySection />
    </div>
  )
}

export default About;
