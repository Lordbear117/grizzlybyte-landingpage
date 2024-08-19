
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export function SecondaryLayout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Unleash Your Digital Potential with GrizzlyByte
              </h1>
              <p className="text-muted-foreground text-lg">
                We are a team of passionate software engineers dedicated to
                crafting cutting-edge digital solutions for businesses of all
                sizes.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
            <Image
              src="/grizzlybyte-bear-logo.svg"
              width="1200"
              height="800"
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto x-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Services
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                GrizzlyByte offers a wide range of software development services
                to help your business thrive in the digital age.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CodeIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Custom Software</h3>
                <p className="text-muted-foreground">
                  We build tailored software solutions to meet your unique
                  business needs.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <SmartphoneIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-muted-foreground">
                  Develop cutting-edge mobile apps for iOS and Android.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <WebhookIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Craft visually stunning and highly performant websites.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <DatabaseIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Database Solutions</h3>
                <p className="text-muted-foreground">
                  Implement robust and scalable database systems.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CloudIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Cloud Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate your applications with cloud services.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CogIcon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">DevOps Automation</h3>
                <p className="text-muted-foreground">
                  Streamline your development and deployment processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]"
        >
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of software engineers and designers are
                passionate about delivering exceptional digital solutions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Team Member"
                  className="mx-auto rounded-full w-24 h-24 object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">Cesar Castro</h3>
                <p className="text-muted-foreground">Software Developer</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Team Member"
                  className="mx-auto rounded-full w-24 h-24 object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">Cesar Castro</h3>
                <p className="text-muted-foreground">Tech Lead</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Team Member"
                  className="mx-auto rounded-full w-24 h-24 object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">Cesar Castro</h3>
                <p className="text-muted-foreground">Full-Stack Developer</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="300"
                  height="300"
                  alt="Team Member"
                  className="mx-auto rounded-full w-24 h-24 object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">Cesar Castro</h3>
                <p className="text-muted-foreground">Project Manager</p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Portfolio
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the successful projects weve delivered for our
                clients.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="mx-auto rounded-lg w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">
                  Acme Corp Website
                </h3>
                <p className="text-muted-foreground">
                  Designed and developed a modern and responsive website for
                  Acme Corporation.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="mx-auto rounded-lg w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">Fitness App</h3>
                <p className="text-muted-foreground">
                  Built a feature-rich mobile app to help users track their
                  fitness goals.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="mx-auto rounded-lg w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mt-4 mb-1">
                  E-commerce Platform
                </h3>
                <p className="text-muted-foreground">
                  Developed a scalable and secure e-commerce platform for a
                  leading retail brand.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]"
        >
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Lets discuss how we can help your
                business succeed.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 GrizzlyByte. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CogIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function PawPrintIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}

function SmartphoneIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function WebhookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}
