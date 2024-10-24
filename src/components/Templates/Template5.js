import React from 'react';

const Template5 = () => {
    return (
        <div className="relative w-full max-w-[1200px] mx-auto my-16 bg-white shadow-lg">
            <div className="relative bg-gray-700 text-white h-60 flex items-center justify-center">
                <div className="text-5xl font-extrabold">Kyle J Shanks</div>
            </div>
            <div className="absolute top-20 left-5 w-80 bg-[#F7E0C1] p-8">
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 80 80" className="w-24 h-24 stroke-black">
                            <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" strokeWidth="2.5" fill="none" />
                        </svg>
                        <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-6xl font-semibold">KJ</p>
                    </div>
                </div>
                <p className="text-gray-700">123 My Place Drive</p>
                <p className="text-gray-700">Astoria, New York 11105</p>
                <p className="text-gray-700">1-800-CALLPLZ</p>
                <p className="text-gray-700">emailsareforsquares@gmail.com</p>
                <div className="mt-8">
                    <a href="#" className="flex items-center mb-4 text-blue-500 hover:underline">
                        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png" alt="Twitter" className="w-8 h-8 mr-2" />
                        Twitter stuff
                    </a>
                    <a href="#" className="flex items-center mb-4 text-red-500 hover:underline">
                        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png" alt="Pinterest" className="w-8 h-8 mr-2" />
                        Pinterest things
                    </a>
                    <a href="#" className="flex items-center mb-4 text-blue-700 hover:underline">
                        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png" alt="LinkedIn" className="w-8 h-8 mr-2" />
                        Linked-in man
                    </a>
                </div>
                <div className="mt-8">
                    <p className="uppercase font-semibold text-lg mb-2 border-b-2 border-gray-300 pb-1">Expertise</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>HTML</li>
                        <li>CSS (Stylus)</li>
                        <li>JavaScript & jQuery</li>
                        <li>Killer Taste</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="uppercase font-semibold text-lg mb-2 border-b-2 border-gray-300 pb-1">Education</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Advanced potion making</li>
                        <li>Degree in popping and locking</li>
                        <li>Knitting game on point</li>
                        <li>Culinary af</li>
                    </ul>
                </div>
            </div>
            <div className="relative ml-96 p-8">
                <h2 className="text-3xl font-semibold text-center mb-8">Jr Front-End Developer</h2>
                <div className="w-48 h-1 bg-gray-400 mx-auto mb-8"></div>
                <div className="uppercase text-lg font-semibold bg-gray-200 py-2 text-center mb-8">Profile</div>
                <p className="text-gray-700 mb-16">
                    Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics truffaut cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh kale chips iPhone biodiesel typewriter freegan, kinfolk brooklyn kitsch man bun. Austin neutra etsy, lumbersexual paleo cornhole sriracha kinfolk meggings kickstarter.
                </p>
                <div className="uppercase text-lg font-semibold bg-gray-200 py-2 text-center mb-8">Experience</div>
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Job #1</h3>
                    <p className="text-gray-600 mb-4">First job description</p>
                    <p className="text-gray-700">
                        Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic hella PBR&B.
                    </p>
                </div>
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Job #2</h3>
                    <p className="text-gray-600 mb-4">Second Job Description</p>
                    <p className="text-gray-700">
                        Beard before they sold out photo booth distillery health goth. Hammock franzen green juice meggings, ethical sriracha tattooed schlitz mixtape man bun stumptown swag whatever distillery blog. Affogato iPhone normcore, meggings actually direct trade lomo plaid franzen shoreditch. Photo booth pug paleo austin, pour-over banh mi scenester vice food truck slow-carb. Street art kogi normcore, vice everyday carry crucifix thundercats man bun raw denim echo park pork belly helvetica vinyl.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Job #3</h3>
                    <p className="text-gray-600 mb-4">Third Job Description</p>
                    <p className="text-gray-700">
                        Next level roof party lo-fi fingerstache skateboard, kogi tumblr. Shabby chic put a bird on it chambray, 3 wolf moon swag beard brooklyn post-ironic taxidermy art party microdosing keffiyeh marfa. Put a bird on it 3 wolf moon cliche helvetica knausgaard. Mumblecore fingerstache lomo, artisan freegan keffiyeh paleo kinfolk kale chips street art blog flannel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Template5;
