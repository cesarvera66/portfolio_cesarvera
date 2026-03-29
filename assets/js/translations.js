/**
 * Translations — EN / ES
 * Each key maps to a data-i18n attribute in the HTML.
 */
const translations = {
  en: {
    // Nav
    "nav.home":        "Home",
    "nav.about":       "About",
    "nav.resume":      "Resume",
    "nav.portfolio":   "Portfolio",
    "nav.interests":   "Interests",
    "nav.references":  "References",
    "nav.contact":     "Contact",

    // Hero
    "hero.intro":      "I'm a ",
    "hero.typed":      "Data Analyst..., Data Visualization Specialist..., Systems Analyst..., Programmer..., Humanitarian Worker.",

    // About
    "about.title":     "About",
    "about.subtitle":  "Data Analyst, enthusiastic and team-oriented professional with a track record of over 11 years in the humanitarian sector. I have accumulated more than 6 years of specialized experience in information management for disaster response, covering the entire data lifecycle—from collection to visualization and analysis—all aimed at supporting strategic decision-making.",
    "about.role":      "Data Management &amp; Information Professional",
    "about.tagline":   "I combine creativity, analysis, and technology to optimize information management and support decision-making.",
    "about.cv":        "CV:",
    "about.phone":     "Phone:",
    "about.city":      "City:",
    "about.degree":    "Bachelor's Degree:",
    "about.degreeVal": "Systems Analysis and Computer Programming",
    "about.email":     "Email:",
    "about.languages": "Languages:",
    "about.langVal":   "Spanish, English, and Guarani",
    "about.body":      "Extensive experience in data collection, processing, and visualization using tools like Kobo, Power BI, Tableau, and QGIS. Proven ability to lead data-driven projects in humanitarian contexts, supporting National Societies and international teams in disaster response, risk reduction, and emergency management.",

    // Stats
    "stats.missions":       "Humanitarian Missions",
    "stats.missionsDesc":   "Emergency response deployments supporting disaster response worldwide",
    "stats.countries":      "Countries Worked In",
    "stats.countriesDesc":  "Experience in field operations across Panama, Costa Rica, Honduras, Peru, Hungary, Mozambique, and Paraguay, providing technical support and optimizing data workflows for humanitarian responses.",
    "stats.dashboards":     "Dashboards Developed",
    "stats.dashboardsDesc": "25+ custom dashboards for real-time monitoring and analysis.",
    "stats.projects":       "Data Projects Completed",
    "stats.projectsDesc":   "32+ projects integrating data collection, processing, and visualization tools like Kobo, Power BI, and SQL Server.",

    // Skills
    "skills.title":   "Tools",
    "skills.desc":    "These are the key tools and technologies I specialize in, enabling me to analyze, visualize, and manage data effectively. From business intelligence platforms like Power BI and Tableau to data management with SQL Server and automation with Power Automate, my expertise allows me to create impactful solutions. Additionally, I leverage GIS tools like QGIS and data collection platforms such as Kobo Toolbox to support humanitarian and data-driven decision-making.",

    // Resume
    "resume.title":          "Resume",
    "resume.expTitle":       "Professional Experience",
    "resume.skillsTitle":    "Computer Skills",
    "resume.eduTitle":       "Education",

    // Resume - Jobs
    "job1.title":    "Data Management Consultant",
    "job1.period":   "11/2024 - Present",
    "job1.company":  "International Organization for Migration (IOM) - Panama City, Panama",
    "job2.title":    "Information Management Officer",
    "job2.period":   "02/2024 - 11/2024",
    "job2.company":  "International Federation of the Red Cross (IFRC) - Panama City, Panama",
    "job3.title":    "Revenue Assurance Analyst",
    "job3.period":   "08/2023 - 02/2024",
    "job3.company":  "Tigo Panama - Panama City, Panama",
    "job4.title":    "Information Management Lead",
    "job4.period":   "01/2023 - 06/2023 (Full-time) / 01/2022 - 12/2022 (Part-time)",
    "job4.company":  "American Red Cross - Panama City, Panama",
    "job5.title":    "Information Management Officer",
    "job5.period":   "12/2020 - 12/2022",
    "job5.company":  "International Federation of the Red Cross (IFRC) - Panama City, Panama",
    "job6.title":    "Information Management Consultant",
    "job6.period":   "11/2019 - 11/2020",
    "job6.company":  "International Federation of the Red Cross (IFRC) - Panama City, Panama",

    // Education
    "edu1.title":    "Master's Degree in Project Management",
    "edu1.period":   "Currently Studying",
    "edu1.school":   "American University of Paraguay",
    "edu2.title":    "Bachelor's Degree in Systems Analysis",
    "edu2.period":   "2016 - 2019",
    "edu2.school":   "National University of Pilar (UNP), Pilar, Paraguay",
    "edu3.title":    "Computer Programmer",
    "edu3.period":   "2016 - 2018",
    "edu3.school":   "National University of Pilar (UNP), Pilar, Paraguay",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.desc":  "Below are some of the products I have developed. While many others are not displayed due to their internal use and confidentiality agreements, the projects showcased here have been published and are available for public viewing.",
    "filter.all":      "All",
    "filter.dash":     "Dashboards",
    "filter.analysis": "Analysis",
    "filter.maps":     "Maps",
    "filter.website":  "Website",
    "filter.scripts":  "Scripts",

    // Interests
    "interests.title": "Interests",
    "interests.desc":  "My interests span across professional, personal, and recreational areas, creating a well-rounded balance between technology, creativity, and physical activity. While I don't always have time for everything, I strive to dedicate moments to these pursuits whenever possible, as they fuel both my professional innovation and personal fulfillment.",
    "interest1.title": "Photography and Drone Videography",
    "interest1.desc":  "Capturing compelling visuals and dynamic aerial footage to document landscapes.",
    "interest2.title": "Artificial Intelligence",
    "interest2.desc":  "Exploring the development and application of AI technologies to enhance data analysis, automate processes, and drive innovative solutions in both humanitarian contexts and personal development.",
    "interest3.title": "Quantitative Trading",
    "interest3.desc":  "Applying data-driven strategies and algorithmic models using Python and Artificial Intelligence to analyze financial markets, optimize trading decisions, and leverage statistical methods for consistent performance and effective risk management.",
    "interest4.title": "Tennis",
    "interest4.desc":  "Engaging in tennis as both a competitive sport and a recreational activity, promoting physical fitness, strategic thinking, and mental resilience on and off the court.",
    "interest5.title": "Video Games",
    "interest5.desc":  "Passionate about video games as a way to unwind, enhance strategic thinking, and engage in immersive, interactive storytelling experiences. 🎮",
    "interest6.title": "Electronic Music",
    "interest6.desc":  "Exploring electronic music for its innovative soundscapes and creative expression, blending rhythm and technology to inspire focus, relaxation, and artistic exploration. 🎧",

    // References
    "references.title": "References",
    "references.desc":  "Throughout my career, I have had the privilege of collaborating with exceptional professionals across various projects and humanitarian contexts.",

    // Contact
    "contact.title":     "Contact",
    "contact.desc":      "Feel free to reach out to me for any inquiries, collaborations, or professional opportunities.",
    "contact.callTitle": "Call Me",
    "contact.emailTitle":"Email Me",
    "contact.waTitle":   "WhatsApp",
    "contact.waDesc":    "Click here to chat",

    // Contact Form
    "contact.form.namePlaceholder":    "Your Name",
    "contact.form.emailPlaceholder":   "Your Email",
    "contact.form.subjectPlaceholder": "Subject",
    "contact.form.messagePlaceholder": "Message",
    "contact.form.loading":            "Loading",
    "contact.form.sent":               "Your message has been sent. Thank you!",
    "contact.form.sendBtn":            "Send Message",

    // Resume - Job bullets
    "resume.job1.bullet1": "Designed and optimized a regional database in <strong>SQL Server</strong>, restructuring standard tables to improve query performance and survey analysis collected from more than <strong>20 geographic locations in 8 countries</strong> during 2024.",
    "resume.job1.bullet2": "Designed and optimized a <strong>general table in SQL Server</strong>, consolidating data from multiple tables to structure and enhance query performance and information analysis from multiple countries in 2024.",
    "resume.job1.bullet3": "Implemented an automated workflow for validation, cleaning, and data loading through a <strong>Python script with a graphical interface</strong>, reducing errors and accelerating SQL Server integration.",
    "resume.job1.bullet4": "Migrated activities from <strong>Excel to Microsoft Planner</strong>, improving task structuring and workflow management.",
    "resume.job1.bullet5": "Configured a work plan in <strong>Microsoft Planner</strong> with visualization in <strong>Power BI</strong> and automated workflows in <strong>Power Automate</strong>, improving task coordination and tracking.",
    "resume.job1.bullet6": "Implemented <strong>monitoring dashboards</strong> and validation for survey implementation and migration flow registration in <strong>KoboToolbox</strong>, with connection <strong>via API with Power BI</strong>.",

    "resume.job2.bullet1": "Developed a <strong>regional dashboard</strong> for monitoring humanitarian assistance and estimating migration flows from <strong>5 Central American countries</strong>.",
    "resume.job2.bullet2": "Implemented an <strong>information assistance point for migrants</strong> in the <strong>Darién</strong> region, Panama, facilitating access to satellite internet and establishing feedback systems.",
    "resume.job2.bullet3": "Managed data and information for decision-making in various <strong>emergency operations and humanitarian programs</strong>, strengthening National Societies capacities in the subregion.",
    "resume.job2.bullet4": "<strong>Facilitated training</strong> for information management teams in Costa Rica and Panama on <strong>HIAC</strong> certifications, mobile data collection tools such as <strong>Kobo Toolbox and ODK</strong>, and served as a <strong>mentor</strong> for the first \"Regional Information Management Team for Emergency Deployment\" program.",
    "resume.job2.bullet5": "Participated in a <strong>multisectoral assessment in Darién</strong>, providing <strong>recommendations for improvement</strong> in the collection, analysis, and visualization of data on services and activities carried out by the <strong>Red Cross Panama in that area</strong>.",
    "resume.job2.bullet6": "<strong>SIMS Coordinator</strong> in the <strong>Hurricane Beryl</strong> response, leading the coordination of remote support for information management, providing assistance in data processing, analysis, and visualization.",

    "resume.job3.bullet1": "Coordinated with business teams to establish and maintain <strong>control processes</strong> for revenue assurance.",
    "resume.job3.bullet2": "Developed <strong>automated tools for trend, variance, and loss analysis in Revenue Assurance</strong>.",
    "resume.job3.bullet3": "Designed and programmed <strong>controls in SQL Server</strong> to monitor anomalies.",
    "resume.job3.bullet4": "Implemented <strong>dashboards in Power BI</strong> for tracking revenues from roaming and electronic top-ups.",
    "resume.job3.bullet5": "Participated in <strong>database migrations</strong>, ensuring data integrity and accuracy during the transfer process.",
    "resume.job3.bullet6": "Led the execution and improvement of <strong>IC, SOX, and KPI</strong> controls.",

    "resume.job4.bullet1": "Led <strong>information management (IM) support</strong> for the Latin America and Caribbean Division, ensuring the efficient handling of data and information.",
    "resume.job4.bullet2": "Provided comprehensive information management support to <strong>multiple countries with ongoing projects</strong>, including <strong>Guatemala, Honduras, El Salvador, Mexico, and Colombia</strong>.",
    "resume.job4.bullet3": "Documented data and information flows, developing training materials to facilitate <strong>data exchange and efficient management</strong>.",
    "resume.job4.bullet4": "<strong>Developed an interactive and user-friendly dashboard</strong> to monitor the <strong>LAC Portfolio</strong>, providing an overview of projects, financial status, key indicators, and relevant data for decision-making and progress tracking.",
    "resume.job4.bullet5": "<strong>Developed dashboards for monitoring humanitarian assistance and emergency response</strong>, enabling real-time analysis and facilitating strategic decision-making.",

    "resume.job5.bullet1": "Coordinated information management for the <strong>health, water, hygiene, and sanitation</strong> department, ensuring quality and analysis in response reports to the <strong>COVID-19</strong> pandemic.",
    "resume.job5.bullet2": "Designed a <strong>monitoring dashboard for global COVID-19 risk levels</strong>, based on a matrix of key epidemiological indicators.",
    "resume.job5.bullet3": "<strong>Developed a regional monitoring dashboard</strong> for the <strong>COVID-19</strong> response, visualizing the implementation of measures across multiple countries.",
    "resume.job5.bullet4": "Developed a <strong>regional immunization dashboard</strong> to track <strong>14 vaccines in 33 countries</strong> over the past <strong>20 years</strong>.",
    "resume.job5.bullet5": "Deployed as <strong>rapid response personnel</strong> in Honduras to support the <strong>information management strategy coordination</strong> in response to <strong>Eta/Iota</strong>.",
    "resume.job5.bullet6": "Deployed as <strong>rapid response personnel in Budapest, Hungary</strong>, to support the emergency operation in Ukraine.",

    "resume.job6.bullet1": "Managed Information Management for the Health Department of the Americas Regional Office.",
    "resume.job6.bullet2": "Developed a dashboard for the Central America Dengue Outbreak for real-time monitoring.",
    "resume.job6.bullet3": "Created a website and forms for the Public Health Course in Emergencies.",
    "resume.job6.bullet4": "Developed maps for scenarios in the Public Health Course in Emergencies.",

    // Portfolio items
    "portfolio.item1.title": "Immunization Coverage Dashboard",
    "portfolio.item1.desc":  "This interactive dashboard provides a comprehensive view of immunization coverage data by country and year.",
    "portfolio.item2.title": "Natural Disasters: Analysis of Global Impact",
    "portfolio.item2.desc":  "This dashboard offers a global and dynamic vision of the social and economic impact of natural disasters worldwide.",
    "portfolio.item3.title": "Epidemiological Index - COVID-19",
    "portfolio.item3.desc":  "Provides a comprehensive overview of COVID-19 trends globally, updated as of December 27, 2022.",
    "portfolio.item4.title": "Population Movement Monitoring System",
    "portfolio.item4.desc":  "This dashboard shows services delivered, people reached, and activities, highlighting migration trends and humanitarian response.",
    "portfolio.item5.title": "Flood Response in Costa Rica – Affected Areas and Intervention Zones",
    "portfolio.item5.desc":  "This map highlights the areas affected by floods in Costa Rica and the intervention zones where the Red Cross is actively responding.",
    "portfolio.item6.title": "My Portfolio &amp; Resume",
    "portfolio.item6.desc":  "My professional journey, where data visualization, analytics, and business intelligence meet humanitarian action.",
    "portfolio.item7.title": "Immunization: Vaccines and Biologicals",
    "portfolio.item7.desc":  "This dashboard provides a global overview of immunization coverage, vaccine distribution, and trends.",
    "portfolio.item8.title": "Mental Health and Psychosocial Support (MHPSS) Capacities of National Societies in the Americas",
    "portfolio.item8.desc":  "This dashboard provides a comprehensive overview of the Mental Health and Psychosocial Support (MHPSS) capacities across National Societies in the Americas region.",
    "portfolio.item9.title": "Dengue Outbreak Response in Panama – 2024",
    "portfolio.item9.desc":  "This map highlights the intervention areas for the 2024 dengue outbreak in Panama.",
    "portfolio.item10.title": "Impact of Natural Disasters in Latin America and the Caribbean (2010-2019)",
    "portfolio.item10.desc":  "This interactive dashboard provides a detailed analysis of natural disasters that impacted Latin America and the Caribbean between 2010 and 2019.",
    "portfolio.item11.title": "Dengue Epidemic in Honduras",
    "portfolio.item11.desc":  "This map illustrates the areas affected by the dengue epidemic in Honduras, with a focus on intervention zones where the Red Cross is actively responding.",
    "portfolio.item12.title": "Excel to SQL Upload Script",
    "portfolio.item12.desc":  "A Python script to automate the process of uploading Excel files to SQL Server.",
    "portfolio.item13.title": "Exploratory Data Analysis — Titanic",
    "portfolio.item13.desc":  "Comprehensive EDA identifying key factors that determined passenger survival on the Titanic, including statistical tests and 12 professional visualizations.",

    // References - job titles
    "ref1.role":  "National Data and KM Officer",
    "ref1.org":   "International Organization for Migration (IOM)",
    "ref2.role":  "Coordinator, Operations",
    "ref2.org":   "International Federation of the Red Cross (IFRC)",
    "ref3.role":  "WASH Officer",
    "ref3.org":   "UNICEF",

    // Footer
    "footer.copyright": "Copyright",
    "footer.rights":    "All Rights Reserved",
  },

  es: {
    // Nav
    "nav.home":        "Inicio",
    "nav.about":       "Sobre mí",
    "nav.resume":      "Experiencia",
    "nav.portfolio":   "Portafolio",
    "nav.interests":   "Intereses",
    "nav.references":  "Referencias",
    "nav.contact":     "Contacto",

    // Hero
    "hero.intro":      "Soy ",
    "hero.typed":      "Analista de Datos..., Especialista en Visualización..., Analista de Sistemas..., Programador..., Trabajador Humanitario.",

    // About
    "about.title":     "Sobre mí",
    "about.subtitle":  "Analista de Datos, profesional entusiasta y orientado al trabajo en equipo con más de 11 años de experiencia en el sector humanitario. He acumulado más de 6 años de experiencia especializada en gestión de información para respuesta a desastres, cubriendo todo el ciclo de datos —desde la recolección hasta la visualización y el análisis— con el objetivo de apoyar la toma de decisiones estratégicas.",
    "about.role":      "Profesional en Gestión de Datos e Información",
    "about.tagline":   "Combino creatividad, análisis y tecnología para optimizar la gestión de la información y apoyar la toma de decisiones.",
    "about.cv":        "CV:",
    "about.phone":     "Teléfono:",
    "about.city":      "Ciudad:",
    "about.degree":    "Licenciatura:",
    "about.degreeVal": "Análisis de Sistemas y Programación",
    "about.email":     "Correo:",
    "about.languages": "Idiomas:",
    "about.langVal":   "Español, Inglés y Guaraní",
    "about.body":      "Amplia experiencia en recolección, procesamiento y visualización de datos con herramientas como Kobo, Power BI, Tableau y QGIS. Capacidad comprobada para liderar proyectos basados en datos en contextos humanitarios, apoyando a Sociedades Nacionales y equipos internacionales en respuesta a desastres, reducción de riesgos y gestión de emergencias.",

    // Stats
    "stats.missions":       "Misiones Humanitarias",
    "stats.missionsDesc":   "Despliegues de respuesta a emergencias apoyando la respuesta a desastres en todo el mundo",
    "stats.countries":      "Países en los que he trabajado",
    "stats.countriesDesc":  "Experiencia en operaciones de campo en Panamá, Costa Rica, Honduras, Perú, Hungría, Mozambique y Paraguay, brindando soporte técnico y optimizando flujos de datos para respuestas humanitarias.",
    "stats.dashboards":     "Dashboards Desarrollados",
    "stats.dashboardsDesc": "Más de 25 dashboards personalizados para monitoreo y análisis en tiempo real.",
    "stats.projects":       "Proyectos de Datos Completados",
    "stats.projectsDesc":   "Más de 32 proyectos integrando herramientas de recolección, procesamiento y visualización de datos como Kobo, Power BI y SQL Server.",

    // Skills
    "skills.title":   "Herramientas",
    "skills.desc":    "Estas son las herramientas y tecnologías clave en las que me especializo, que me permiten analizar, visualizar y gestionar datos de manera efectiva. Desde plataformas de inteligencia empresarial como Power BI y Tableau hasta la gestión de datos con SQL Server y la automatización con Power Automate. Además, utilizo herramientas GIS como QGIS y plataformas de recolección de datos como Kobo Toolbox.",

    // Resume
    "resume.title":          "Experiencia",
    "resume.expTitle":       "Experiencia Profesional",
    "resume.skillsTitle":    "Habilidades Informáticas",
    "resume.eduTitle":       "Educación",

    // Resume - Jobs
    "job1.title":    "Consultor en Gestión de Datos",
    "job1.period":   "11/2024 - Presente",
    "job1.company":  "Organización Internacional para las Migraciones (OIM) - Ciudad de Panamá, Panamá",
    "job2.title":    "Oficial de Gestión de Información",
    "job2.period":   "02/2024 - 11/2024",
    "job2.company":  "Federación Internacional de la Cruz Roja (FICR) - Ciudad de Panamá, Panamá",
    "job3.title":    "Analista de Revenue Assurance",
    "job3.period":   "08/2023 - 02/2024",
    "job3.company":  "Tigo Panamá - Ciudad de Panamá, Panamá",
    "job4.title":    "Líder de Gestión de Información",
    "job4.period":   "01/2023 - 06/2023 (Tiempo completo) / 01/2022 - 12/2022 (Medio tiempo)",
    "job4.company":  "Cruz Roja Americana - Ciudad de Panamá, Panamá",
    "job5.title":    "Oficial de Gestión de Información",
    "job5.period":   "12/2020 - 12/2022",
    "job5.company":  "Federación Internacional de la Cruz Roja (FICR) - Ciudad de Panamá, Panamá",
    "job6.title":    "Consultor en Gestión de Información",
    "job6.period":   "11/2019 - 11/2020",
    "job6.company":  "Federación Internacional de la Cruz Roja (FICR) - Ciudad de Panamá, Panamá",

    // Education
    "edu1.title":    "Maestría en Gestión de Proyectos",
    "edu1.period":   "Cursando actualmente",
    "edu1.school":   "Universidad Americana del Paraguay",
    "edu2.title":    "Licenciatura en Análisis de Sistemas",
    "edu2.period":   "2016 - 2019",
    "edu2.school":   "Universidad Nacional de Pilar (UNP), Pilar, Paraguay",
    "edu3.title":    "Analista Programador",
    "edu3.period":   "2016 - 2018",
    "edu3.school":   "Universidad Nacional de Pilar (UNP), Pilar, Paraguay",

    // Portfolio
    "portfolio.title": "Portafolio",
    "portfolio.desc":  "A continuación se presentan algunos de los productos que he desarrollado. Muchos otros no se muestran por su uso interno y acuerdos de confidencialidad; los proyectos aquí mostrados han sido publicados y están disponibles para consulta pública.",
    "filter.all":      "Todos",
    "filter.dash":     "Dashboards",
    "filter.analysis": "Análisis",
    "filter.maps":     "Mapas",
    "filter.website":  "Sitio Web",
    "filter.scripts":  "Scripts",

    // Interests
    "interests.title": "Intereses",
    "interests.desc":  "Mis intereses abarcan áreas profesionales, personales y recreativas, creando un equilibrio integral entre tecnología, creatividad y actividad física. Aunque no siempre tengo tiempo para todo, me esfuerzo por dedicar momentos a estas actividades cuando es posible, ya que impulsan mi innovación profesional y mi realización personal.",
    "interest1.title": "Fotografía y Videografía con Dron",
    "interest1.desc":  "Capturando imágenes impactantes y material aéreo dinámico para documentar paisajes.",
    "interest2.title": "Inteligencia Artificial",
    "interest2.desc":  "Explorando el desarrollo y la aplicación de tecnologías de IA para mejorar el análisis de datos, automatizar procesos y generar soluciones innovadoras en contextos humanitarios y de desarrollo personal.",
    "interest3.title": "Trading Cuantitativo",
    "interest3.desc":  "Aplicando estrategias basadas en datos y modelos algorítmicos con Python e IA para analizar mercados financieros, optimizar decisiones de trading y aprovechar métodos estadísticos para un rendimiento consistente y una gestión eficaz del riesgo.",
    "interest4.title": "Tenis",
    "interest4.desc":  "Practicando el tenis como deporte competitivo y actividad recreativa, promoviendo la condición física, el pensamiento estratégico y la resiliencia mental dentro y fuera de la cancha.",
    "interest5.title": "Videojuegos",
    "interest5.desc":  "Apasionado por los videojuegos como forma de desconectar, desarrollar el pensamiento estratégico y disfrutar de experiencias narrativas interactivas e inmersivas. 🎮",
    "interest6.title": "Música Electrónica",
    "interest6.desc":  "Explorando la música electrónica por sus paisajes sonoros innovadores y su expresión creativa, fusionando ritmo y tecnología para inspirar enfoque, relajación y exploración artística. 🎧",

    // References
    "references.title": "Referencias",
    "references.desc":  "A lo largo de mi carrera, he tenido el privilegio de colaborar con profesionales excepcionales en diversos proyectos y contextos humanitarios.",

    // Contact
    "contact.title":     "Contacto",
    "contact.desc":      "No dudes en contactarme para cualquier consulta, colaboración u oportunidad profesional.",
    "contact.callTitle": "Llámame",
    "contact.emailTitle":"Escríbeme",
    "contact.waTitle":   "WhatsApp",
    "contact.waDesc":    "Haz clic aquí para chatear",

    // Contact Form
    "contact.form.namePlaceholder":    "Tu nombre",
    "contact.form.emailPlaceholder":   "Tu correo electrónico",
    "contact.form.subjectPlaceholder": "Asunto",
    "contact.form.messagePlaceholder": "Mensaje",
    "contact.form.loading":            "Enviando...",
    "contact.form.sent":               "Tu mensaje ha sido enviado. ¡Gracias!",
    "contact.form.sendBtn":            "Enviar Mensaje",

    // Resume - Job bullets
    "resume.job1.bullet1": "Diseñé y optimicé una base de datos regional en <strong>SQL Server</strong>, reestructurando tablas estándar para mejorar el rendimiento de consultas y el análisis de encuestas recopiladas de más de <strong>20 ubicaciones geográficas en 8 países</strong> durante 2024.",
    "resume.job1.bullet2": "Diseñé y optimicé una <strong>tabla general en SQL Server</strong>, consolidando datos de múltiples tablas para estructurar y mejorar el rendimiento de consultas y el análisis de información de múltiples países en 2024.",
    "resume.job1.bullet3": "Implementé un flujo de trabajo automatizado para validación, limpieza y carga de datos mediante un <strong>script Python con interfaz gráfica</strong>, reduciendo errores y acelerando la integración con SQL Server.",
    "resume.job1.bullet4": "Migré actividades de <strong>Excel a Microsoft Planner</strong>, mejorando la estructuración de tareas y la gestión del flujo de trabajo.",
    "resume.job1.bullet5": "Configuré un plan de trabajo en <strong>Microsoft Planner</strong> con visualización en <strong>Power BI</strong> y flujos automatizados en <strong>Power Automate</strong>, mejorando la coordinación y el seguimiento de tareas.",
    "resume.job1.bullet6": "Implementé <strong>dashboards de monitoreo</strong> y validación para el seguimiento de encuestas y registro de flujos migratorios en <strong>KoboToolbox</strong>, con conexión <strong>vía API con Power BI</strong>.",

    "resume.job2.bullet1": "Desarrollé un <strong>dashboard regional</strong> para monitorear la asistencia humanitaria y estimar flujos migratorios en <strong>5 países de Centroamérica</strong>.",
    "resume.job2.bullet2": "Implementé un <strong>punto de asistencia informativa para migrantes</strong> en la región del <strong>Darién</strong>, Panamá, facilitando el acceso a internet satelital y estableciendo sistemas de retroalimentación.",
    "resume.job2.bullet3": "Gestioné datos e información para la toma de decisiones en diversas <strong>operaciones de emergencia y programas humanitarios</strong>, fortaleciendo las capacidades de Sociedades Nacionales en la subregión.",
    "resume.job2.bullet4": "<strong>Facilitó capacitaciones</strong> para equipos de gestión de información en Costa Rica y Panamá sobre certificaciones <strong>HIAC</strong>, herramientas de recolección de datos móviles como <strong>Kobo Toolbox y ODK</strong>, y actuó como <strong>mentor</strong> del primer programa \"Equipo Regional de Gestión de Información para Despliegue en Emergencias\".",
    "resume.job2.bullet5": "Participé en una <strong>evaluación multisectorial en el Darién</strong>, proporcionando <strong>recomendaciones de mejora</strong> en la recolección, análisis y visualización de datos sobre servicios y actividades realizados por la <strong>Cruz Roja Panamá en esa área</strong>.",
    "resume.job2.bullet6": "<strong>Coordinador SIMS</strong> en la respuesta al <strong>Huracán Beryl</strong>, liderando la coordinación del apoyo remoto en gestión de información y brindando asistencia en procesamiento, análisis y visualización de datos.",

    "resume.job3.bullet1": "Coordiné con equipos de negocio para establecer y mantener <strong>procesos de control</strong> de aseguramiento de ingresos.",
    "resume.job3.bullet2": "Desarrollé <strong>herramientas automatizadas para análisis de tendencias, variaciones y pérdidas en Revenue Assurance</strong>.",
    "resume.job3.bullet3": "Diseñé y programé <strong>controles en SQL Server</strong> para monitorear anomalías.",
    "resume.job3.bullet4": "Implementé <strong>dashboards en Power BI</strong> para el seguimiento de ingresos por roaming y recargas electrónicas.",
    "resume.job3.bullet5": "Participé en <strong>migraciones de bases de datos</strong>, asegurando la integridad y precisión de los datos durante el proceso de transferencia.",
    "resume.job3.bullet6": "Lideré la ejecución y mejora de controles <strong>IC, SOX y KPI</strong>.",

    "resume.job4.bullet1": "Lideré el <strong>soporte en gestión de información (IM)</strong> para la División de América Latina y el Caribe, garantizando el manejo eficiente de datos e información.",
    "resume.job4.bullet2": "Brindé soporte integral de gestión de información a <strong>múltiples países con proyectos activos</strong>, incluyendo <strong>Guatemala, Honduras, El Salvador, México y Colombia</strong>.",
    "resume.job4.bullet3": "Documenté flujos de datos e información, desarrollando materiales de capacitación para facilitar el <strong>intercambio de datos y la gestión eficiente</strong>.",
    "resume.job4.bullet4": "<strong>Desarrollé un dashboard interactivo y fácil de usar</strong> para monitorear el <strong>Portafolio LAC</strong>, proporcionando una visión general de proyectos, estado financiero, indicadores clave y datos relevantes para la toma de decisiones.",
    "resume.job4.bullet5": "<strong>Desarrollé dashboards para el monitoreo de asistencia humanitaria y respuesta a emergencias</strong>, permitiendo análisis en tiempo real y facilitando la toma de decisiones estratégicas.",

    "resume.job5.bullet1": "Coordiné la gestión de información para el departamento de <strong>salud, agua, higiene y saneamiento</strong>, asegurando calidad y análisis en los informes de respuesta a la pandemia de <strong>COVID-19</strong>.",
    "resume.job5.bullet2": "Diseñé un <strong>dashboard de monitoreo de niveles de riesgo global de COVID-19</strong>, basado en una matriz de indicadores epidemiológicos clave.",
    "resume.job5.bullet3": "<strong>Desarrollé un dashboard regional de monitoreo</strong> para la respuesta al <strong>COVID-19</strong>, visualizando la implementación de medidas en múltiples países.",
    "resume.job5.bullet4": "Desarrollé un <strong>dashboard regional de inmunización</strong> para el seguimiento de <strong>14 vacunas en 33 países</strong> durante los últimos <strong>20 años</strong>.",
    "resume.job5.bullet5": "Desplegado como <strong>personal de respuesta rápida</strong> en Honduras para apoyar la <strong>coordinación de estrategia de gestión de información</strong> en respuesta a <strong>Eta/Iota</strong>.",
    "resume.job5.bullet6": "Desplegado como <strong>personal de respuesta rápida en Budapest, Hungría</strong>, para apoyar la operación de emergencia en Ucrania.",

    "resume.job6.bullet1": "Gestioné la Gestión de Información para el Departamento de Salud de la Oficina Regional de las Américas.",
    "resume.job6.bullet2": "Desarrollé un dashboard para el Brote de Dengue en Centroamérica para monitoreo en tiempo real.",
    "resume.job6.bullet3": "Creé un sitio web y formularios para el Curso de Salud Pública en Emergencias.",
    "resume.job6.bullet4": "Desarrollé mapas para escenarios del Curso de Salud Pública en Emergencias.",

    // Portfolio items
    "portfolio.item1.title": "Dashboard de Cobertura de Inmunización",
    "portfolio.item1.desc":  "Este dashboard interactivo proporciona una visión integral de los datos de cobertura de inmunización por país y año.",
    "portfolio.item2.title": "Desastres Naturales: Análisis del Impacto Global",
    "portfolio.item2.desc":  "Este dashboard ofrece una visión global y dinámica del impacto social y económico de los desastres naturales en el mundo.",
    "portfolio.item3.title": "Índice Epidemiológico - COVID-19",
    "portfolio.item3.desc":  "Proporciona una visión integral de las tendencias del COVID-19 a nivel mundial, actualizado al 27 de diciembre de 2022.",
    "portfolio.item4.title": "Sistema de Monitoreo de Movimiento Poblacional",
    "portfolio.item4.desc":  "Este dashboard muestra servicios prestados, personas alcanzadas y actividades, destacando tendencias migratorias y respuesta humanitaria.",
    "portfolio.item5.title": "Respuesta a Inundaciones en Costa Rica – Áreas Afectadas y Zonas de Intervención",
    "portfolio.item5.desc":  "Este mapa destaca las áreas afectadas por inundaciones en Costa Rica y las zonas de intervención donde la Cruz Roja responde activamente.",
    "portfolio.item6.title": "Mi Portafolio &amp; Currículum",
    "portfolio.item6.desc":  "Mi trayectoria profesional, donde la visualización de datos, el análisis y la inteligencia de negocios se unen a la acción humanitaria.",
    "portfolio.item7.title": "Inmunización: Vacunas y Productos Biológicos",
    "portfolio.item7.desc":  "Este dashboard proporciona una visión global de la cobertura de inmunización, distribución de vacunas y tendencias.",
    "portfolio.item8.title": "Capacidades de Salud Mental y Apoyo Psicosocial (SMAPS) de Sociedades Nacionales en las Américas",
    "portfolio.item8.desc":  "Este dashboard ofrece una visión integral de las capacidades de Salud Mental y Apoyo Psicosocial (SMAPS) de las Sociedades Nacionales en la región de las Américas.",
    "portfolio.item9.title": "Respuesta al Brote de Dengue en Panamá – 2024",
    "portfolio.item9.desc":  "Este mapa destaca las áreas de intervención para el brote de dengue de 2024 en Panamá.",
    "portfolio.item10.title": "Impacto de Desastres Naturales en América Latina y el Caribe (2010-2019)",
    "portfolio.item10.desc":  "Este dashboard interactivo proporciona un análisis detallado de los desastres naturales que impactaron América Latina y el Caribe entre 2010 y 2019.",
    "portfolio.item11.title": "Epidemia de Dengue en Honduras",
    "portfolio.item11.desc":  "Este mapa ilustra las áreas afectadas por la epidemia de dengue en Honduras, con énfasis en las zonas de intervención donde la Cruz Roja responde activamente.",
    "portfolio.item12.title": "Script de Carga de Excel a SQL",
    "portfolio.item12.desc":  "Un script Python para automatizar el proceso de carga de archivos Excel a SQL Server.",
    "portfolio.item13.title": "Análisis Exploratorio de Datos — Titanic",
    "portfolio.item13.desc":  "EDA exhaustivo que identifica los factores clave que determinaron la supervivencia de pasajeros en el Titanic, incluyendo pruebas estadísticas y 12 visualizaciones profesionales.",

    // References - job titles
    "ref1.role":  "Oficial Nacional de Datos y Gestión del Conocimiento",
    "ref1.org":   "Organización Internacional para las Migraciones (OIM)",
    "ref2.role":  "Coordinadora de Operaciones",
    "ref2.org":   "Federación Internacional de la Cruz Roja (FICR)",
    "ref3.role":  "Oficial de WASH",
    "ref3.org":   "UNICEF",

    // Footer
    "footer.copyright": "Copyright",
    "footer.rights":    "Todos los Derechos Reservados",
  }
};
