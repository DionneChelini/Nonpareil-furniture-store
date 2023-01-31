/* This example requires Tailwind CSS v2.0+ */

function Footer() {
  let footerNavigation = {
    service: [
      { name: 'Shipping & returns', href: 'shipping-and-returns' },
      { name: 'Refund policy', href: '/refund-policy' },
      { name: 'How to buy', href: '/how-to-buy' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Get in touch', href: '/contact' },
    ],
    company: [
      { name: 'Who we are', href: '/who-are-we' },
      { name: 'Terms & conditions', href: '/terms-and-conditions' },
      { name: 'Privacy', href: '/privacy-policy' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
    connect: [
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
      { name: 'Twitter', href: '#' },
    ],
  }
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Nonpareil Collection
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20 grid grid-cols-2 gap-8 sm:gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-y-10 lg:col-span-1 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

            <div>
              <h3 className="text-sm font-medium text-gray-900">Service</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.service.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm  font-medium text-gray-900">Company</h3>
            <ul role="list" className="mt-6 space-y-6">
              {footerNavigation.company.map((item) => (
                <li key={item.name} className="text-sm">
                  <a href={item.href} className="text-gray-500 hover:text-gray-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm mt-8 md:mt-0 font-medium text-gray-900">Connect</h3>
            <ul role="list" className="mt-6 space-y-6">
              {footerNavigation.connect.map((item) => (
                <li key={item.name} className="text-sm">
                  <a href={item.href} className="text-gray-500 hover:text-gray-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center text-sm text-gray-500">

          </div>
          <p className="mt-6 text-sm text-gray-500 text-center sm:mt-0">&copy; 2023 Nonpareil Collection, Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
Footer.displayName = "Footer"

export default Footer