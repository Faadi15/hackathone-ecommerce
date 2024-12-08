export default function ContactUs() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Get in touch with us
      </h1><p className="font-thin text-sm text-black mb-8 text-center ">
        For More Information About Our Product & Services.
        Please Feel Free To Drop Us An Email.
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-lg ">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">123 Main Street, Suite 100<br />City, State, ZIP</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Time</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg ">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                required
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows={5}
                required
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-[#029FAE] rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
    </div>

  )
};