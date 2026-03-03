export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                    Contact Us
                </h1>
                <div className="bg-white/50 rounded-lg border border-gray-200 p-8">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg border border-gray-200 bg-white/50">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Email
                        </h3>
                        <p className="text-foreground/70">contact@splitsec.com</p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-200 bg-white/50">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Support
                        </h3>
                        <p className="text-foreground/70">support@splitsec.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
