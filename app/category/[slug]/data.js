import {
    Snowflake,
    Settings,
    Zap,
    Shield,
    Wrench,
    Store,
    Hotel,
    Factory,
    Gift,
    Home,
    MapPin,
    Users2,
    Landmark,
    IndianRupee,
    HardHat,
    Users,
    ThermometerSnowflake
} from "lucide-react";
import Link from "next/link";

export const categoryCityContent = {
    "milk-chiling-plant": {
        mainImg: "/newbg.webp",
        h2: (city) => `Milk Chilling Plant Manufacturer in ${city}`,
        intro: (city) => (
            <>
                Bhagyalaxmi Industries is a leading{" "}
                <Link
                    href={`/products`}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    Milk Chilling Plant Manufacturer
                </Link>{" "}
                in {city}, offering advanced and energy-efficient milk chilling solutions for dairy farms, milk collection centers, cooperatives, and commercial dairy processing units across {city}.
            </>
        ),
        intro2: (city) => `We specialize in designing and manufacturing high-performance milk chilling plants that rapidly cool raw milk to preserve freshness, maintain quality, and prevent bacterial growth. Our systems are built using food-grade stainless steel and modern refrigeration technology to ensure hygienic and reliable dairy operations.`,
        intro3: (city) => `From small village-level milk collection centers to large dairy processing facilities, Bhagyalaxmi Industries delivers customized and turnkey milk chilling plant solutions tailored to your production capacity.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_Chilling_Plant_unh0vf.webp",

        whyChooseHeading: (city) => `Why Choose Bhagyalaxmi Industries for Milk Chilling Plants in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Milk Chilling Solutions",
                desc: "We provide milk chillers, bulk milk coolers, refrigeration systems, storage tanks, and automation panels.",
                icon: Snowflake
            },
            {
                title: "Customizable Plant Capacities",
                desc: "Available in multiple capacities suitable for small, medium, and large dairy operations.",
                icon: Settings
            },
            {
                title: "Energy-Efficient Technology",
                desc: "Optimized refrigeration systems that reduce power consumption while maintaining fast cooling.",
                icon: Zap
            },
            {
                title: "Hygienic & Durable Construction",
                desc: "Manufactured using SS 304/316 stainless steel for safe and contamination-free milk handling.",
                icon: Shield
            },
            {
                title: `Installation & After-Sales Support`,
                desc: "End-to-end assistance including layout design, installation, commissioning, and technical service.",
                icon: Wrench
            }],

        Details: (city) => ({
            title: `Milk Chilling Plant Types We Offer`,

            sections: [
                {
                    title: "Direct Expansion Milk Chilling Plants",
                    points: [
                        "Fast and efficient chilling systems for immediate milk cooling.",
                    ]
                },
                {
                    title: "Ice Bank Type Milk Chilling Plants",
                    points: [
                        "Suitable for areas with voltage fluctuations and continuous operation."
                    ]
                },
                {
                    title: "Modular Milk Chilling Plants",
                    points: [
                        "Scalable systems designed for growing dairy operations."
                    ]
                },
                {
                    title: "Fully Automatic Milk Chilling Plants",
                    points: [
                        "Integrated with digital temperature monitoring and control panels."
                    ]
                },
                {
                    title: "High-Capacity Industrial Milk Chilling Plants",
                    points: [
                        "Designed for large-scale dairy processing units."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768459877/milk-chilling-plant_vezdki.webp",
            imgPostion: { objectPosition: "50% 82%" },

            list: [
                "Rapid cooling to preserve milk freshness",
                "Uniform temperature distribution",
                "Energy-efficient refrigeration systems",
                "Easy cleaning and maintenance",
                "Corrosion-resistant and durable build",
                "Designed for Indian climatic conditions",
            ]
        },

        industries: [
            {
                title: "Dairy Farms",
                desc: "Small, medium, and large-scale dairy operations.",
                icon: Home
            },
            {
                title: "Milk Collection Centers",
                desc: "Village-level and cooperative milk procurement centers.",
                icon: MapPin
            },
            {
                title: "Dairy Cooperatives",
                desc: "Government and private milk federations.",
                icon: Users2
            },
            {
                title: "Milk Processing Plants",
                desc: "Pre-processing milk chilling and bulk storage applications.",
                icon: Factory
            },
            {
                title: `Institutional & Government Projects`,
                desc: "Dairy development programs and infrastructure projects.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Milk Chilling Plant Supply for ${city} Dairy Project`,

            meta: {
                client: `${city} Milk Producers Cooperative`,
                location: `${city}`,
                project: "Village Milk Collection & Central Chilling Facility"
            },

            scope: [
                "Supply of ice bank type Milk Chilling Plant",
                "Centralized chilling system installation",
                "Commissioning and technical training"
            ],

            results: [
                "Consistent milk temperature maintenance",
                "Significant reduction in milk spoilage",
                "Improved milk quality and shelf life",
                "Enhanced operational efficiency"
            ],

            conclusion: `This project highlights Bhagyalaxmi Industries’ expertise as a reliable Milk Chilling Plant manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Milk Chilling Plant in ${city} – FAQs`,

            items: [
                {
                    q: "What is a Milk Chilling Plant?",
                    a: "A Milk Chilling Plant is a dairy system designed to quickly reduce and maintain milk temperature to preserve freshness and quality before processing."
                },
                {
                    q: `Are Bhagyalaxmi Milk Chilling Plants suitable for Indian conditions?`,
                    a: `Yes. Our plants are designed specifically for Indian climate, voltage fluctuations, and dairy operational requirements.`
                },
                {
                    q: `Do you supply Milk Chilling Plants in bulk in ${city}`,
                    a: "Yes. We specialize in bulk, turnkey, and project-based installations for cooperatives and large dairy units."
                },
                {
                    q: "Are your Milk Chilling Plants energy efficient?",
                    a: "Yes. Our advanced refrigeration systems reduce electricity consumption while ensuring rapid cooling."
                },
                {
                    q: `Do you provide warranty and support?`,
                    a: `Yes. We provide warranty coverage along with installation and after-sales technical support.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Milk Chilling Plant in ${city}?`,

            subtitle: "Contact Bhagyalaxmi Industries today for pricing, technical consultation, and customized milk chilling plant solutions.",

            description: `We help you establish efficient, hygienic, and cost-effective dairy chilling systems across ${city}.`
        }),

        aboutImg: "/ctaimg.webp",
    },

    "milk-pasteurizer": {
        mainImg: "/newbg.webp",
        h2: (city) => `Milk Pasteurization Plant Manufacturer in ${city}`,
        intro: (city) => (
            <>
                Bhagyalaxmi Industries is a leading{" "}
                <Link
                    href={`/products`}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    Milk Pasteurization Plant Manufacturer
                </Link>{" "}
                in {city}, offering advanced and hygienic milk processing solutions for dairy farms, cooperatives, milk collection centers, and large-scale dairy processing units across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-performance, energy-efficient Milk Pasteurization Plants designed to eliminate harmful bacteria, extend milk shelf life, and maintain nutritional value while ensuring compliance with dairy safety standards.`,
        intro3: (city) => `From small dairy units to fully automated milk processing facilities, our Milk Pasteurization Plants feature food-grade stainless steel construction, automated temperature control systems, advanced heat exchangers, and reliable process integration—making them ideal for ${city} growing dairy industry.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_Pasteurizer_Machine_hgchsw.webp",

        whyChooseHeading: (city) => `Why Choose Bhagyalaxmi Milk Pasteurization Plants in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Milk Processing Solutions",
                desc: "We provide end-to-end Milk Pasteurization Plants, including milk reception systems, balance tanks, plate heat exchangers (PHE), pasteurizers, homogenizers, storage tanks, and automation panels.",
                icon: Factory
            },
            {
                title: "Custom Plant Capacity",
                desc: "Our Milk Pasteurization Plants are available in various capacities depending on daily milk processing requirements. We offer customized systems for private dairies, cooperatives, and government dairy projects.",
                icon: Settings
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, Bhagyalaxmi Industries supplies Milk Pasteurization Plants in ${city} at factory prices—ensuring cost-effective and scalable dairy processing solutions.`,
                icon: IndianRupee
            },
            {
                title: "Technical & Installation Support",
                desc: "Our experienced engineers assist with plant layout design, process planning, installation, commissioning, and operator training for smooth plant operation.",
                icon: HardHat
            },
            {
                title: `Trusted by Dairy Professionals`,
                desc: `Our Milk Pasteurization Plants are widely used by dairy farmers, milk unions, private dairy brands, and institutional buyers across ${city}`,
                icon: Users
            }],

        Details: (city) => ({
            title: `Milk Pasteurization Plant Types We Offer`,

            sections: [
                {
                    title: "Batch Type Milk Pasteurization Plants",
                    points: [
                        "Suitable for small and medium-scale dairy operations.",
                    ]
                },
                {
                    title: "Continuous Milk Pasteurization Plants",
                    points: [
                        "Designed for high-volume milk processing."
                    ]
                },
                {
                    title: "HTST (High Temperature Short Time) Pasteurization Systems",
                    points: [
                        "Advanced systems ensuring rapid heating and cooling cycles."
                    ]
                },
                {
                    title: "Fully Automatic Milk Pasteurization Plants",
                    points: [
                        "Integrated with PLC-based digital control and monitoring."
                    ]
                },
                {
                    title: "Integrated Processing Lines",
                    points: [
                        "Combined pasteurization, homogenization, and chilling systems."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Bhagyalaxmi Milk Pasteurization Plants`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389100/Stainless_Steel_Milk_Pasteurizer_if9o69.webp",
            imgPostion: { objectPosition: "50% 100%" },

            list: [
                "Food-grade stainless steel fabrication",
                "Precise temperature control system",
                "Energy-efficient heat recovery technology",
                "Uniform heating and rapid cooling",
                "Low maintenance and long service life",
                "Designed for Indian dairy operating conditions",
            ],
        },

        industries: [
            {
                title: "Dairy Farms",
                desc: "Processing and value addition at farm level.",
                icon: Home
            },
            {
                title: "Milk Collection Centers",
                desc: "Pre-processing before packaging or distribution.",
                icon: MapPin
            },
            {
                title: "Dairy Cooperatives",
                desc: "Government and private milk federations.",
                icon: Users2
            },
            {
                title: "Milk Processing Plants",
                desc: "Commercial milk and dairy product manufacturing units.",
                icon: Factory
            },
            {
                title: `Institutional & Government Projects`,
                desc: "Dairy infrastructure and rural development initiatives.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Milk Pasteurization Plant Supply for ${city} Dairy Project`,

            meta: {
                client: `${city} Milk Producers Cooperative`,
                location: `${city}`,
                project: "Centralized Milk Processing & Pasteurization Unit"
            },

            scope: [
                "Installation of HTST Milk Pasteurization Plant",
                "Integration with chilling and storage systems",
                "Commissioning and technical training"
            ],

            results: [
                "Improved milk safety and hygiene standards",
                "Extended milk shelf life",
                "Increased processing efficiency",
                "Reduced operational costs"
            ],

            conclusion: `This project highlights Bhagyalaxmi Industries’ reliability as a Milk Pasteurization Plant manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Milk Pasteurization Plant in ${city} – FAQs`,

            items: [
                {
                    q: "What is a Milk Pasteurization Plant?",
                    a: "A Milk Pasteurization Plant is a dairy processing system that heats milk to a specific temperature for a defined time to eliminate harmful microorganisms while preserving quality."
                },
                {
                    q: `Are your plants compliant with dairy safety standards?`,
                    a: `Yes. Our Milk Pasteurization Plants are designed to meet modern food safety and hygiene standards.`
                },
                {
                    q: `Do you provide turnkey solutions in ${city}`,
                    a: "Yes. We offer complete turnkey milk processing solutions including installation and commissioning."
                },
                {
                    q: "Are the plants energy efficient?",
                    a: "Yes. Our heat recovery systems help reduce energy consumption and operational costs."
                },
                {
                    q: `Do you offer warranty and support?`,
                    a: `Yes. Warranty coverage and after-sales technical support are provided.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Milk Pasteurization Plant Manufacturer in ${city}?`,

            subtitle: "Contact Bhagyalaxmi Industries today for pricing, brochures, or customized consultation.",

            description: `We help you select the right Milk Pasteurization Plant based on your daily processing capacity, infrastructure, and operational requirements—perfectly suited for ${city} dairy projects.`
        }),

        aboutImg: "/ctaimg.webp",
    },

    "milk-processing-plant": {
        mainImg: "/newbg.webp",
        h2: (city) => `Milk Processing Plant Manufacturer in ${city}`,
        intro: (city) => (
            <>
                Bhagyalaxmi Industries is a leading{" "}
                <Link
                    href={`/products`}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    Milk Processing Plant Manufacturer
                </Link>{" "}
                in {city}, offering complete and advanced dairy processing solutions for dairy farms, cooperatives, private dairies, and large-scale milk processing units across {city}.
            </>
        ),
        intro2: (city) => `We specialize in designing and manufacturing energy-efficient, hygienic, and fully integrated Milk Processing Plants that handle milk reception, pasteurization, homogenization, chilling, storage, and packaging operations with high precision and reliability.`,
        intro3: (city) => `From small dairy startups to large commercial dairy processing units, our Milk Processing Plants are built with food-grade stainless steel, automated control systems, and modern dairy technology—making them ideal for ${city} growing dairy sector.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/Milk_Processing_Plant_rptgnh.webp",

        whyChooseHeading: (city) => `Why Choose Bhagyalaxmi Milk Processing Plants in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Turnkey Dairy Solutions",
                desc: "We provide end-to-end Milk Processing Plants including milk reception units, pasteurizers, homogenizers, cream separators, chilling systems, storage tanks, and packaging lines.",
                icon: Factory
            },
            {
                title: "Custom Plant Design & Capacity",
                desc: "Our Milk Processing Plants are available in various capacities depending on daily milk handling requirements. We offer customized plant layouts for small, medium, and large-scale dairy operations.",
                icon: Settings
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, Bhagyalaxmi Industries offers factory-direct pricing, ensuring cost-effective and scalable solutions for dairy businesses and institutional projects in ${city}`,
                icon: IndianRupee
            },
            {
                title: "Installation & Commissioning Support",
                desc: "Our technical experts provide plant layout planning, installation, commissioning, and operator training for smooth and efficient operations.",
                icon: HardHat
            },
            {
                title: `Trusted by Dairy Professionals`,
                desc: `Our Milk Processing Plants are widely used by dairy farmers, milk unions, private dairy brands, and institutional buyers across ${city}`,
                icon: Users
            }],

        Details: (city) => ({
            title: `Milk Processing Plant Systems We Offer`,

            sections: [
                {
                    title: "Milk Reception & Storage Systems",
                    points: [
                        "Efficient milk unloading, weighing, and storage solutions.",
                    ]
                },
                {
                    title: "Milk Pasteurization & Homogenization Units",
                    points: [
                        "Advanced systems for safe and uniform milk processing."
                    ]
                },
                {
                    title: "Milk Chilling & Cooling Systems",
                    points: [
                        "Rapid cooling to maintain freshness and quality."
                    ]
                },
                {
                    title: "Cream Separation & Standardization Units",
                    points: [
                        "Precise fat content control and cream processing."
                    ]
                },
                {
                    title: "Automated Packaging Lines",
                    points: [
                        "Hygienic and efficient milk pouch or bottle filling systems."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Bhagyalaxmi Milk Processing Plants`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/Milk_Processing_Plant_rptgnh.webp",
            imgPostion: { objectPosition: "50% 90%" },

            list: [
                "Food-grade stainless steel fabrication",
                "Fully automated control systems",
                "Energy-efficient processing technology",
                "Hygienic and easy-to-clean design",
                "Low maintenance and high durability",
                "Designed for Indian climate and power conditions",
            ],
        },

        industries: [
            {
                title: "Dairy Farms",
                desc: "On-site milk processing and value addition.",
                icon: Home
            },
            {
                title: "Milk Collection Centers",
                desc: "Large-scale milk collection and processing operations.",
                icon: MapPin
            },
            {
                title: "Dairy Cooperatives",
                desc: "Commercial milk and dairy product manufacturing.",
                icon: Users2
            },
            {
                title: "Milk Processing Plants",
                desc: "Processing milk for distribution and retail supply.",
                icon: Factory
            },
            {
                title: `Institutional & Government Projects`,
                desc: "Dairy development and rural infrastructure initiatives.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Milk Processing Plant Installation in  ${city}`,

            meta: {
                client: `${city} Milk Producers Cooperative`,
                location: `${city}`,
                project: "Integrated Milk Processing & Packaging Facility"
            },

            scope: [
                "Installation of complete Milk Processing Plant",
                "Integration of pasteurization, homogenization, and chilling systems",
                "Packaging line setup and commissioning"
            ],

            results: [
                "Improved processing capacity",
                "Enhanced milk quality and safety",
                "Reduced operational downtime",
                "Increased production efficiency"
            ],

            conclusion: `This project demonstrates Bhagyalaxmi Industries’ expertise as a reliable Milk Processing Plant manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Milk Processing Plant in ${city} – FAQs`,

            items: [
                {
                    q: "What is a Milk Processing Plant?",
                    a: "A Milk Processing Plant is a complete dairy system used for handling, pasteurizing, homogenizing, chilling, and packaging milk for safe consumption."
                },
                {
                    q: `Do you provide turnkey milk processing solutions in ${city}`,
                    a: `Yes. We provide complete turnkey dairy processing plant solutions including design, manufacturing, installation, and commissioning.`
                },
                {
                    q: `Are your Milk Processing Plants energy efficient?`,
                    a: "Yes. Our plants use advanced technology to minimize energy consumption and operational costs."
                },
                {
                    q: "Can the plant be customized as per capacity?",
                    a: "Yes. We design custom-built Milk Processing Plants based on daily milk volume and business requirements."
                },
                {
                    q: `Do you provide after-sales support?`,
                    a: `Yes. We provide warranty coverage, technical assistance, and maintenance support.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Milk Processing Plant Manufacturer in ${city}?`,

            subtitle: "Contact Bhagyalaxmi Industries today for pricing, brochures, and customized dairy processing solutions.",

            description: `We help you choose the right Milk Processing Plant based on your processing capacity, infrastructure, and expansion plans—perfectly suited for ${city} dairy projects.`
        }),

        aboutImg: "/prod/major2.webp",
    },

    "milk-storage-tank": {
        mainImg: "/newbg.webp",
        h2: (city) => `Milk Storage Tank Manufacturer in ${city}`,
        intro: (city) => (
            <>
                Bhagyalaxmi Industries is a leading{" "}
                <Link
                    href={`/products`}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    Milk Storage Tank Manufacturer
                </Link>{" "}
                in {city}, offering high-quality and hygienic milk storage solutions for dairy farms, milk collection centers, cooperatives, and large-scale dairy processing units across {city}.
            </>
        ),
        intro2: (city) => `We specialize in manufacturing durable, food-grade stainless steel Milk Storage Tanks designed to safely store raw and processed milk while maintaining temperature, freshness, and hygiene standards.`,
        intro3: (city) => `From small dairy farms to large commercial milk processing plants, our Milk Storage Tanks are built with robust construction, advanced insulation systems, and reliable temperature control features—making them ideal for ${city} expanding dairy industry.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/milk_storage_tank_2_btvnli.webp",

        whyChooseHeading: (city) => `Why Choose Bhagyalaxmi Milk Storage Tanks in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Hygienic & Food-Grade Construction",
                desc: "Our Milk Storage Tanks are manufactured using high-quality food-grade stainless steel to ensure safety, hygiene, and long service life.",
                icon: Factory
            },
            {
                title: "Multiple Capacity Options",
                desc: "We offer Milk Storage Tanks in various capacities to suit small dairy units, cooperatives, and industrial-scale milk processing plants.",
                icon: Settings
            },
            {
                title: "Insulated & Temperature-Controlled Tanks",
                desc: `Available with advanced insulation and optional cooling systems to maintain consistent milk temperature and prevent spoilage.`,
                icon: ThermometerSnowflake
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, Bhagyalaxmi Industries supplies Milk Storage Tanks in ${city} at factory prices—ensuring cost-effective solutions for dairy businesses and institutions.`,
                icon: IndianRupee
            },
            {
                title: `Installation & Technical Support`,
                desc: `Our technical team provides assistance with tank selection, layout planning, installation guidance, and after-sales support.`,
                icon: Users
            }],

        Details: (city) => ({
            title: `Milk Storage Tank Types We Offer`,

            sections: [
                {
                    title: "Vertical Milk Storage Tanks",
                    points: [
                        "Space-saving design suitable for dairy plants with limited floor space.",
                    ]
                },
                {
                    title: "Horizontal Milk Storage Tanks",
                    points: [
                        "Ideal for large-volume milk storage requirements."
                    ]
                },
                {
                    title: "Insulated Milk Storage Tanks",
                    points: [
                        "Designed to maintain milk temperature for extended periods."
                    ]
                },
                {
                    title: "Chilled Milk Storage Tanks",
                    points: [
                        "Integrated with cooling systems for temperature-controlled storage."
                    ]
                },
                {
                    title: "Custom-Built Milk Storage Tanks",
                    points: [
                        "Designed according to specific capacity and layout requirements."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Bhagyalaxmi Milk Storage Tanks`,
            img: "/prod1.webp",
            imgPostion: { objectPosition: "50% 90%" },

            list: [
                "Food-grade stainless steel fabrication",
                "Superior insulation for temperature retention",
                "Smooth internal finish for easy cleaning",
                "Leak-proof and corrosion-resistant design",
                "Low maintenance and long service life",
                "Suitable for Indian dairy operating conditions",
            ],
        },

        industries: [
            {
                title: "Dairy Farms",
                desc: "Raw milk storage before transportation or processing.",
                icon: Home
            },
            {
                title: "Milk Collection Centers",
                desc: "Temporary milk storage before chilling or dispatch.",
                icon: MapPin
            },
            {
                title: "Dairy Cooperatives",
                desc: "Bulk milk storage for organized procurement systems.",
                icon: Users2
            },
            {
                title: "Milk Processing Plants",
                desc: "Processed milk storage prior to packaging and distribution.",
                icon: Factory
            },
            {
                title: `Institutional & Government Projects`,
                desc: "Dairy development and rural infrastructure initiatives.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Milk Storage Tank Supply for ${city} Dairy Project`,

            meta: {
                client: `${city} Milk Producers Cooperative`,
                location: `${city}`,
                project: "Bulk Milk Storage Facility"
            },

            scope: [
                "Supply of insulated Milk Storage Tanks",
                "On-site installation support",
                "Integration with milk chilling system"
            ],

            results: [
                "Improved milk preservation",
                "Reduced contamination risk",
                "Increased storage capacity",
                "Enhanced operational efficiency"
            ],

            conclusion: `This project highlights Bhagyalaxmi Industries’ expertise as a reliable Milk Storage Tank manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Milk Processing Plant in ${city} – FAQs`,

            items: [
                {
                    q: "What is a Milk Storage Tank?",
                    a: "A Milk Storage Tank is a dairy equipment used to store raw or processed milk safely while maintaining hygiene and temperature conditions."
                },
                {
                    q: `Are your Milk Storage Tanks insulated?`,
                    a: `Yes. We offer insulated and temperature-controlled Milk Storage Tanks to prevent spoilage.`
                },
                {
                    q: `Do you supply Milk Storage Tanks in bulk in ${city}?`,
                    a: "Yes. We specialize in bulk supply and project-based installations for cooperatives and dairy plants."
                },
                {
                    q: "Can the tank capacity be customized?",
                    a: "Yes. We manufacture Milk Storage Tanks in custom capacities based on client requirements."
                },
                {
                    q: `Do you provide installation support?`,
                    a: `Yes. We provide guidance for installation and after-sales support.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Milk Storage Tank Manufacturer in ${city}?`,

            subtitle: "Contact Bhagyalaxmi Industries today for pricing, brochures, and customized storage solutions.",

            description: `We help you select the right Milk Storage Tank based on your capacity requirements and operational needs—perfectly suited for ${city} dairy projects.`
        }),

        aboutImg: "/indus3.webp",
    },

    "mini-dairy-plant": {
        mainImg: "/newbg.webp",
        h2: (city) => `Mini Dairy Plant Manufacturer in ${city}`,
        intro: (city) => (
            <>
                Bhagyalaxmi Industries is a leading{" "}
                <Link
                    href={`/products`}
                    className="text-blue-500 font-semibold hover:underline"
                >
                    Mini Dairy Plant Manufacturer
                </Link>{" "}
                in {city}, offering compact, efficient, and fully integrated dairy processing solutions for startups, small dairy farms, cooperatives, and entrepreneurs across {city}.
            </>
        ),
        intro2: (city) => `We specialize in designing and manufacturing Mini Dairy Plants that handle milk reception, pasteurization, homogenization, chilling, storage, and packaging in a compact and cost-effective setup.`,
        intro3: (city) => `Our Mini Dairy Plants are ideal for small to medium-scale dairy businesses looking to start milk processing with lower investment and high operational efficiency in ${city} growing dairy market.`,
        introImg: "/check3.webp",

        whyChooseHeading: (city) => `Why Choose Bhagyalaxmi Mini Dairy Plants in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Compact Dairy Solution",
                desc: "Our Mini Dairy Plants include milk reception units, pasteurizers, homogenizers, chilling systems, storage tanks, and optional packaging units—all integrated into a space-efficient layout.",
                icon: Factory
            },
            {
                title: "Ideal for Startups & Small Businesses",
                desc: "Designed for entrepreneurs and small dairy owners, our Mini Dairy Plants require lower space, investment, and manpower.",
                icon: Settings
            },
            {
                title: "Custom Capacity Options",
                desc: `Available in various processing capacities depending on daily milk volume. We offer customized plant configurations to suit business requirements.`,
                icon: ThermometerSnowflake
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, Bhagyalaxmi Industries supplies Mini Dairy Plants in ${city} at factory prices, ensuring affordability and better ROI.`,
                icon: IndianRupee
            },
            {
                title: `Installation & Technical Support`,
                desc: `We provide complete support including plant layout planning, installation, commissioning, and operator training.`,
                icon: Users
            }],

        Details: (city) => ({
            title: `Mini Dairy Plant Systems We Offer`,

            sections: [
                {
                    title: "Milk Reception & Storage Units",
                    points: [
                        "Efficient milk collection and temporary storage systems.",
                    ]
                },
                {
                    title: "Milk Pasteurization & Homogenization Units",
                    points: [
                        "Safe and uniform milk processing systems."
                    ]
                },
                {
                    title: "Milk Chilling Systems",
                    points: [
                        "Rapid cooling to maintain freshness and quality."
                    ]
                },
                {
                    title: "Cream Separator Units",
                    points: [
                        "Efficient fat separation for value-added dairy products."
                    ]
                },
                {
                    title: "Compact Milk Packaging Systems",
                    points: [
                        "Optional pouch or bottle filling machines."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Bhagyalaxmi Mini Dairy Plants`,
            img: "/prod1.webp",
            imgPostion: { objectPosition: "50% 90%" },

            list: [
                "Food-grade stainless steel construction",
                "Compact and modular design",
                "Energy-efficient processing technology",
                "Hygienic and easy-to-clean system",
                "Low operational cost",
                "Long-lasting performance",
            ],
        },

        industries: [
            {
                title: "Dairy Startups",
                desc: "Ideal for entrepreneurs starting milk processing businesses.",
                icon: Home
            },
            {
                title: "Small & Medium Dairy Farms",
                desc: "On-site milk processing and value addition.",
                icon: MapPin
            },
            {
                title: "Dairy Cooperatives",
                desc: "Small-scale milk processing units.",
                icon: Users2
            },
            {
                title: "Rural & Government Projects",
                desc: "Dairy development and self-employment initiatives.",
                icon: Factory
            },
            {
                title: `Local Milk Brands`,
                desc: "Processing and packaging for local distribution.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Mini Dairy Plant Installation in ${city}`,

            meta: {
                client: `${city} Milk Producers Cooperative`,
                location: `${city}`,
                project: "Compact Milk Processing & Packaging Unit"
            },

            scope: [
                "Supply of Mini Dairy Plant",
                "Installation of pasteurization and chilling system",
                "Integration of small-scale packaging unit"
            ],

            results: [
                "Increased daily processing capacity",
                "Improved milk quality and hygiene",
                "Reduced operational costs",
                "Faster return on investment"
            ],

            conclusion: `This project demonstrates Bhagyalaxmi Industries’ reliability as a Mini Dairy Plant manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Mini Dairy Plant in ${city} – FAQs`,

            items: [
                {
                    q: "What is a Mini Dairy Plant?",
                    a: "A Mini Dairy Plant is a compact milk processing system designed for small-scale dairy operations."
                },
                {
                    q: `What capacity options are available?`,
                    a: `We offer various capacity options depending on daily milk processing requirements.`
                },
                {
                    q: `Is the Mini Dairy Plant suitable for startups?`,
                    a: "Yes. It is ideal for entrepreneurs and small dairy businesses."
                },
                {
                    q: `Do you provide installation support in ${city}?`,
                    a: "Yes. We provide complete installation, commissioning, and training support."
                },
                {
                    q: `Do you offer warranty?`,
                    a: `Yes. Warranty and after-sales support are provided (terms & conditions apply).`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Mini Dairy Plant Manufacturer in ${city}?`,

            subtitle: "Contact Bhagyalaxmi Industries today for pricing, brochures, and customized solutions.",

            description: `We help you select the right Mini Dairy Plant based on your processing capacity, space availability, and business goals—perfectly suited for ${city} dairy entrepreneurs.`
        }),

        aboutImg: "/indus3.webp",
    },
};
