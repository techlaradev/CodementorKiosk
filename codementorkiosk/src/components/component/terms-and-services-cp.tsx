import { Collapsible } from "@/components/ui/collapsible"

export function TermsAndServicesCp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to our platform! By accessing or using our services, you agree to be bound by these terms of service
            and our privacy policy. Please read them carefully.
          </p>
          <Collapsible className="space-y-4">
            <div>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  We take your privacy seriously and are committed to protecting your personal information. Our privacy
                  policy outlines how we collect, use, and safeguard your data.
                </p>
                <p>
                  You have the right to access, update, and delete your personal information at any time. If you have
                  any concerns or questions, please contact our support team.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  We may collect and use certain information about you, such as your name, email address, and usage
                  data, to provide and improve our services. We will never sell or share your personal information with
                  third parties without your consent.
                </p>
                <p>
                  You agree to use our services in compliance with all applicable laws and regulations. We reserve the
                  right to suspend or terminate your account if we believe you are engaging in unlawful or inappropriate
                  activities.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  All content and materials on our platform, including but not limited to text, graphics, logos, and
                  software, are the property of our company or our licensors and are protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
                <p>
                  You may not modify, copy, distribute, transmit, display, reproduce, or create derivative works from
                  our content without our prior written permission.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  You agree to use our services in a responsible and ethical manner. This includes refraining from
                  engaging in any unlawful, abusive, or harmful activities, and respecting the rights of other users.
                </p>
                <p>
                  We reserve the right to suspend or terminate your account if we believe you are violating these terms
                  of service or engaging in any other inappropriate behavior.
                </p>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}
