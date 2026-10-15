export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  area: string;
  category: 'mega-commercial' | 'restaurants-cafes' | 'industrial-warehouses' | 'corporate-administrative';
  categoryLabel: string;
  scope: string[];
  description: string;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
  status?: 'completed' | 'in-progress';
}

export const PROJECTS: Project[] = [
  // --- Mega Commercial & Retail ---
  {
    id: "alrugaib-tabuk",
    title: "مفروشات الرقيب - صرح تجاري متكامل",
    client: "Al Rugaib Furniture",
    location: "تبوك - المملكة العربية السعودية",
    area: "4,000 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "معالجة التربة والقواعد الخرسانية",
      "توريد وتركيب هيكل معدني متكامل",
      "إنشاء دور ميزانين بمساحة 1,400 م²",
      "إنشاء هيكل مدني لزوم المصعد والسلالم الكهربائية",
      "تنفيذ كافة الأعمال المعمارية والكهروميكانيكية"
    ],
    description: "مشروع صرح تجاري متكامل لمفروشات الرقيب شمل التأسيس الإنشائي من القواعد الخرسانية والهيكل المعدني وحتى التشطيب الفاخر وتركيب أنظمة الحركة الميكانيكية.",
    image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-1.jpeg",
    gallery: [
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-1.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-2.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-3.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-4.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-5.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-6.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "ashley-jeddah",
    title: "آشلي للأثاث المنزلي - المعرض الرئيسي",
    client: "Ashley Furniture HomeStore",
    location: "جدة - المملكة العربية السعودية",
    area: "4,600 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "تنفيذ أعمال إحلال وتجديد شاملة للمبنى",
      "أرضيات وجدران ودهانات متطورة",
      "أعمال الديكورات الخشبية والأسقف المستعارة",
      "أعمال الإضاءة المعمارية وشبكات التكييف",
      "تركيب اللوحات الإعلانية والواجهات الخارجية"
    ],
    description: "إعادة تأهيل وتشطيب شامل لمعرض آشلي للأثاث وفق أرقى المواصفات العالمية للعلامة التجارية لتقديم تجربة تسوق راقية.",
    image: "/images/projects/ashley-jeddah/ashley-jeddah-1.jpeg",
    gallery: [
      "/images/projects/ashley-jeddah/ashley-jeddah-1.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-2.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-3.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-4.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-5.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "alrugaib-riyadh",
    title: "مفروشات الرقيب - فرع الرياض",
    client: "Al Rugaib Furniture",
    location: "الرياض - المملكة العربية السعودية",
    area: "4,000 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "تنفيذ أعمال إحلال وتجديد لكامل المعرض",
      "أرضيات وجدران ودهانات حديثة",
      "أعمال الديكورات الخشبية واللوحات الإعلانية",
      "صيانة وتمديد شبكات التكييف والإنارة الفاخرة"
    ],
    description: "تجديد وتطوير معرض مفروشات الرقيب في العاصمة الرياض وتجهيز صالات العرض الداخلية بلمسات خشبية راقية.",
    image: "/images/projects/alrugaib-riyadh/alrugaib-riyadh-1.jpeg",
    gallery: [
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-1.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-2.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-3.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-4.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "ashley-makkah-1",
    title: "آشلي للأثاث - مكة المكرمة (المرحلة الأولى)",
    client: "Al Rugaib Furniture / Ashley",
    location: "مكة المكرمة - المملكة العربية السعودية",
    area: "3,800 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "معالجة التربة والقواعد الخرسانية لمبنى خرساني متكامل",
      "إنشاء دور ميزانين بمساحة 800 م²",
      "إنشاء هيكل خرساني لزوم المصعد والسلالم الكهربائية",
      "تنفيذ كافة الأعمال المعمارية والكهروميكانيكية"
    ],
    description: "تأسيس وتشطيب مبنى معرض آشلي للأثاث بمكة المكرمة بأساسات قوية وأعمال ميزانين وربط كهروميكانيكي احترافي.",
    image: "/images/projects/ashley-makkah-1/ashley-makkah-1-1.jpeg",
    gallery: [
      "/images/projects/ashley-makkah-1/ashley-makkah-1-1.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-2.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-3.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-4.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "ashley-makkah-2",
    title: "آشلي للأثاث - مكة المكرمة (المرحلة الثانية)",
    client: "Al Rugaib Furniture / Ashley",
    location: "مكة المكرمة - المملكة العربية السعودية",
    area: "1,500 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "إنشاء مبنى إضافي متكامل",
      "الأعمال المعمارية والكهروميكانيكية",
      "الربط الإنشائي والتشغيلي مع المرحلة الأولى"
    ],
    description: "توسعة صالات العرض من خلال إنشاء مبنى إضافي جديد لزيادة الطاقة الاستيعابية للمعرض.",
    image: "/images/projects/ashley-makkah-2/ashley-makkah-2-1.jpeg",
    status: "in-progress"
  },
  {
    id: "ashley-dammam",
    title: "آشلي للأثاث - فرع الدمام",
    client: "Al Rugaib Furniture / Ashley",
    location: "الدمام - المملكة العربية السعودية",
    area: "4,500 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "معالجة التربة والقواعد الخرسانية والهيكل المعدني",
      "إنشاء دور ميزانين بمساحة 1,300 م²",
      "تنفيذ الأعمال المعمارية والكهروميكانيكية الشاملة"
    ],
    description: "تنفيذ صرح تجاري ضخم بمواصفات قياسية لمنطقة الشرقية لخدمة عملاء آشلي للأثاث.",
    image: "/images/projects/ashley-dammam/ashley-dammam-1.jpeg",
    status: "in-progress"
  },
  {
    id: "garmin-ksa",
    title: "معرض ومقر جارمن السعودية",
    client: "Garmin KSA",
    location: "جدة - المملكة العربية السعودية",
    area: "150 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "تنفيذ جميع الأعمال المعمارية والتأسيسية",
      "تصنيع وتوريد الأثاث المكتبي والتجاري المخصص",
      "تركيب الديكورات الجدارية والإنارة التقنية"
    ],
    description: "تنفيذ متكامل لمعرض التكنولوجيا والملاحة العالمي جارمن بطابع عصري يعبر عن دقة العلامة التجارية.",
    image: "/images/projects/garmin-ksa/garmin-ksa-1.jpeg",
    gallery: [
      "/images/projects/ashley-dammam/ashley-dammam-1.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-2.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-3.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-4.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-5.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-6.jpeg"
    ],
    status: "completed"
  },
  {
    id: "alsannat-luggage",
    title: "الصنات للحقائب",
    client: "Al Sannat For Luggage",
    location: "الرياض - المملكة العربية السعودية",
    area: "36 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "تشطيب داخلي شامل وتصميم واجهات العرض",
      "تصنيع وحدات الرفوف والأثاث المخصص",
      "أنظمة الإنارة التوجيهية وتوزيع المنتجات"
    ],
    description: "متجر راقٍ يركز على أفضل استغلال للمساحة وتوفير حركة سلسة للمتسوقين.",
    image: "/images/projects/alsannat-luggage/alsannat-luggage-1.jpeg",
    status: "completed"
  },

  // --- Industrial & Mega Warehouses ---
  {
    id: "thaob-alami",
    title: "مصنع الثوب العالمي",
    client: "مصنع الثوب العالمي",
    location: "جدة - المدينة الصناعية الرابعة",
    area: "25,000 م²",
    category: "industrial-warehouses",
    categoryLabel: "مستودعات ومصانع",
    scope: [
      "إنشاء وتشطيب المستودع والمصنع بالكامل",
      "تنفيذ شبكات الكهرباء والميكانيكا والضغط العالي",
      "أنظمة مكافحة الحريق والإنذار المعتمدة",
      "الأرضيات الخرسانية المسلحة والتشطيبات الصناعية"
    ],
    description: "مشروع صناعي عملاق بمساحة 25 ألف متر مربع، شمل بنية تحتية صناعية ضخمة وخطوط إنتاج وتخزين وفق معايير هيئة المدن الصناعية (مدن).",
    image: "/images/projects/thaob-alami/thaob-alami-1.jpeg",
    gallery: [
      "/images/projects/alsannat-luggage/alsannat-luggage-1.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-2.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-3.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "alrugaib-warehouse",
    title: "مستودعات شركة الرقيب المركزية",
    client: "شركة حمد محمد الرقيب وأولاده التجارية",
    location: "جدة - المملكة العربية السعودية",
    area: "10,700 م²",
    category: "industrial-warehouses",
    categoryLabel: "مستودعات ومصانع",
    scope: [
      "معالجة ودهان الأرضيات بالإيبوكسي الصناعي عالي التحمل",
      "تنفيذ وتركيب رفوف التخزين العملاقة (Heavy Duty Racking)",
      "تركيب وتمديد الإنارة وأنظمة التغذية الكهربائية للمستودع",
      "تجهيز مكاتب إدارية ملحقة بمساحة 400 م²",
      "تجهيز ورشة صيانة متخصصة بمساحة 300 م²",
      "توريد وتركيب أبواب التحميل السريعة (Dock Doors)"
    ],
    description: "مركز لوجستي وتخزيني ضخم يخدم عمليات التوزيع والتخزين لمفروشات الرقيب بالمنطقة الغربية.",
    image: "/images/projects/alrugaib-warehouse/alrugaib-warehouse-1.jpeg",
    gallery: [
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-1.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-2.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-3.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "eyewa-warehouse",
    title: "مستودعات شركة أيوا (Eyewa)",
    client: "Eyewa",
    location: "جدة - المملكة العربية السعودية",
    area: "1,200 م²",
    category: "industrial-warehouses",
    categoryLabel: "مستودعات ومصانع",
    scope: [
      "الأعمال المعمارية والكهروميكانيكية",
      "توريد وتركيب رفوف التخزين الدقيقة",
      "أنظمة السلامة والتهوية المركزية"
    ],
    description: "مستودع متطور لحفظ وتوزيع النظارات والمنتجات البصرية بأعلى درجات التنظيم والتحكم البيئي.",
    image: "/images/projects/eyewa-warehouse/eyewa-warehouse-1.jpeg",
    status: "completed"
  },

  // --- Corporate & Administrative ---
  {
    id: "eyewa-hq",
    title: "المقر الرئيسي لشركة أيوا (Eyewa)",
    client: "Eyewa Head Office",
    location: "جدة - المملكة العربية السعودية",
    area: "800 م²",
    category: "corporate-administrative",
    categoryLabel: "مقرات ومكاتب إدارية",
    scope: [
      "التشطيبات المعمارية الحديثة (Modern Corporate Fit-Out)",
      "الأعمال الكهروميكانيكية وشبكات البيانات الذكية",
      "توريد وتفصيل الأثاث المكتبي وقاعات الاجتماعات"
    ],
    description: "بيئة عمل إدارية تفاعلية حديثة تلبي متطلبات مقرات الشركات الإقليمية الرائدة في التجارة الإلكترونية.",
    image: "/images/projects/eyewa-hq/eyewa-hq-1.jpeg",
    gallery: [
      "/images/projects/eyewa-warehouse/eyewa-warehouse-1.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-2.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-3.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-4.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-5.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "eyewa-yasmin",
    title: "معرض أيوا - الياسمين مول",
    client: "Eyewa Yasmin Mall",
    location: "جدة - الياسمين مول",
    area: "120 م²",
    category: "mega-commercial",
    categoryLabel: "معارض ومتاجر كبرى",
    scope: [
      "تشطيب تجاري كامل وفق متطلبات إدارة المول",
      "ديكورات زجاجية وإضاءات خاصة بعرض النظارات",
      "تنفيذ كهروميكانيك ونقاط بيع متكاملة"
    ],
    description: "معرض تجاري فاخر داخل أحد أكبر مولات جدة يتميز بالبساطة والجاذبية البصرية.",
    image: "/images/projects/eyewa-yasmin/eyewa-yasmin-1.jpeg",
    status: "completed"
  },
  {
    id: "bme-consulting",
    title: "شركة بروج المحترف للاستشارات الهندسية",
    client: "BME Engineering Consultants",
    location: "جدة - المملكة العربية السعودية",
    area: "110 م²",
    category: "corporate-administrative",
    categoryLabel: "مقرات ومكاتب إدارية",
    scope: [
      "الأعمال المعمارية والمكتبية",
      "الأعمال الكهروميكانيكية والتكييف",
      "تقسيم المساحات وقاعات الاستشارة"
    ],
    description: "مقر مكتب استشاري هندسي صمم ونفذ بأعلى درجات الدقة والأناقة الوظيفية.",
    image: "/images/projects/bme-consulting/bme-consulting-1.jpeg",
    status: "completed"
  },
  {
    id: "sohair",
    title: "شركة سهير (Sohair)",
    client: "Sohair Co.",
    location: "جدة - المملكة العربية السعودية",
    area: "1,500 م²",
    category: "corporate-administrative",
    categoryLabel: "مقرات ومكاتب إدارية",
    scope: [
      "أعمال الديكور الخشبي الفاخر",
      "تصنيع وتركيب الأبواب الخشبية المصمتة",
      "التشطيبات المعمارية الدقيقة للمقرات الكبرى"
    ],
    description: "لمسات نجارة وأخشاب احترافية تبرز براعة ورش التشييد في تنفيذ الأعمال الخشبية الفخمة.",
    image: "/images/projects/sohair/sohair-1.jpeg",
    status: "completed"
  },
  {
    id: "villa-tala",
    title: "فيلا طلال السكنية",
    client: "Villa Tala",
    location: "جدة - المملكة العربية السعودية",
    area: "200 م²",
    category: "corporate-administrative",
    categoryLabel: "مشاريع خاصة وسكنية",
    scope: [
      "تشطيبات معمارية متقدمة",
      "أعمال كهروميكانيكية متطورة",
      "ديكورات داخلية خاصة"
    ],
    description: "تنفيذ فيلا خاصة بأسلوب عصري يجمع بين الراحة والفخامة المعمارية.",
    image: "/images/projects/villa-tala/villa-tala-1.jpeg",
    status: "completed"
  },

  // --- Restaurants & Hospitality ---
  {
    id: "sheraton-resort",
    title: "منتجع شيراتون أبحر الشمالية",
    client: "Sheraton Resort Obhur",
    location: "جدة - أبحر الشمالية",
    area: "مساحات فندقية متعددة",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "تنفيذ جميع الأعمال الإنشائية والمعمارية",
      "الأعمال الخشبية للغرف الفندقية الفاخرة",
      "الأعمال الخشبية والديكور لمطعم المنتجع",
      "تصنيع وتوريد الأثاث الفندقي الراقي"
    ],
    description: "مشروع ضيافة عالمي في واجهة أبحر البحرية، شمل تصنيع أرقى الديكورات الخشبية والأثاث المخصص بالتعاون مع كبرى الجهات.",
    image: "/images/projects/sheraton-resort/sheraton-resort-1.jpeg",
    gallery: [
      "/images/projects/villa-tala/villa-tala-1.jpeg",
      "/images/projects/villa-tala/villa-tala-2.jpeg",
      "/images/projects/villa-tala/villa-tala-3.jpeg",
      "/images/projects/villa-tala/villa-tala-4.jpeg",
      "/images/projects/villa-tala/villa-tala-5.jpeg",
      "/images/projects/villa-tala/villa-tala-6.jpeg",
      "/images/projects/villa-tala/villa-tala-7.jpeg",
      "/images/projects/villa-tala/villa-tala-8.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "kokiyan-beach",
    title: "مطعم وكافيه شاطئ كويكان",
    client: "Coastline LLC - Kokiyan",
    location: "جدة - المملكة العربية السعودية",
    area: "مساحة رحبة مطلة",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "تنفيذ الأعمال المعمارية والديكورات الداخلية والخارجية",
      "الأعمال الكهربائية والميكانيكية وأنظمة السلامة",
      "تجهيز مراوح الشفط المركزية وغرف التبريد الصناعية",
      "تجهيز المطبخ ومسارات التبريد والطهي"
    ],
    description: "وجهة ساحلية استثنائية جهزت بأحدث تقنيات المطابخ والمطاعم وغرف التبريد والشفط المتوافقة مع أعلى اشتراطات الأمان.",
    image: "/images/projects/kokiyan-beach/kokiyan-beach-1.jpeg",
    gallery: [
      "/images/projects/kokiyan-beach/kokiyan-beach-1.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-2.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-3.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-4.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-5.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-6.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-7.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-8.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "balcony-restaurant",
    title: "مطعم بلكونة (Balcony Restaurant)",
    client: "Balcony Restaurant",
    location: "جدة - المملكة العربية السعودية",
    area: "صالة طعام وتراس خارجي",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "تنفيذ الأعمال المعمارية الشاملة",
      "تصنيع الأعمال الخشبية الدقيقة والأثاث الفاخر",
      "الأعمال الزجاجية والواجهات البانورامية",
      "تنسيق الإضاءة والأجواء الداخلية"
    ],
    description: "أجواء طعام راقية تجمع بين الجلسات المفتوحة والديكور الخشبي الدافئ المنفذ بدقة متناهية.",
    image: "/images/projects/balcony-restaurant/balcony-restaurant-1.jpeg",
    gallery: [
      "/images/projects/balcony-restaurant/balcony-restaurant-1.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-2.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-3.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-4.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-5.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-6.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-7.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-8.jpeg"
    ],
    isFeatured: true,
    status: "completed"
  },
  {
    id: "villa-fayzouza",
    title: "مطعم فيلا فيزوزة (Villa Fayzouza)",
    client: "Villa Fayzouza",
    location: "جدة - المملكة العربية السعودية",
    area: "مطعم راقٍ متعدد الصالات",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "الأعمال المعمارية والديكورية المتطورة",
      "الأعمال الخشبية والأسقف الفنية",
      "تفصيل الأثاث والواجهات الزجاجية الفخمة"
    ],
    description: "مطعم بطراز كلاسيكي حديث شمل تنفيذ تفاصيل خشبية معقدة وديكورات جدارية مبهرة.",
    image: "/images/projects/villa-fayzouza/villa-fayzouza-1.jpeg",
    status: "completed"
  },
  {
    id: "cken-restaurant",
    title: "مطعم شكن (Cken - HKN)",
    client: "HKN - Cken Restaurant",
    location: "جدة - المملكة العربية السعودية",
    area: "مطعم وجبات سريعة راقٍ",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "الأعمال المعمارية وأعمال الاستيل المقاوم للصدأ",
      "الأعمال الخشبية والديكورات الحديثة",
      "تصنيع الكاونترات والأثاث المخصص"
    ],
    description: "تصميم وتنفيذ عصري وعملي يمزج بين متانة الاستيل ودفء الأخشاب لخدمة مرتادي المطعم بسرعة وسلاسة.",
    image: "/images/projects/cken-restaurant/cken-restaurant-1.jpeg",
    status: "completed"
  },
  {
    id: "dar-biryani",
    title: "مطعم دار البرياني",
    client: "دار البرياني",
    location: "تبوك - المملكة العربية السعودية",
    area: "صالة طعام ومطابخ",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "جميع الأعمال الإنشائية والمعمارية",
      "الأعمال الإلكتروميكانيكية المتكاملة",
      "أعمال الديكور الداخلي وتصنيع الأثاث"
    ],
    description: "إنشاء وتشطيب مطعم عائلي راقٍ في مدينة تبوك وفق أعلى مواصفات الأمان والديكور الشرقي المعاصر.",
    image: "/images/projects/dar-biryani/dar-biryani-1.jpeg",
    status: "completed"
  },
  {
    id: "sezione-restaurant",
    title: "مطعم سيزيوني (Sezione)",
    client: "Sezione Restaurant",
    location: "جدة - المملكة العربية السعودية",
    area: "صالة طعام راقية",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "الأعمال الإنشائية والتشطيب الداخلي",
      "الأعمال الخشبية التخصصية",
      "تفصيل وتوريد الأثاث"
    ],
    description: "مطعم إيطالي أنيق يعتمد على جماليات الخشب الطبيعي والإضاءة الدافئة.",
    image: "/images/projects/sezione-restaurant/sezione-restaurant-1.jpeg",
    status: "completed"
  },
  {
    id: "zaikaki-indian",
    title: "مطعم زايكاكاي الهندي (Zaikaki)",
    client: "Zaikaki KSA",
    location: "جدة - المملكة العربية السعودية",
    area: "مطعم عائلي راقٍ",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "الأعمال الإنشائية والتشطيبية المتكاملة",
      "الديكورات الخشبية والزخارف المعاصرة",
      "تصنيع وتوزيع الأثاث المريح"
    ],
    description: "تنفيذ متناغم يعكس التراث الهندي بأسلوب عصري جذاب وراحة متناهية للزبائن.",
    image: "/images/projects/zaikaki-indian/zaikaki-indian-1.jpeg",
    status: "completed"
  },
  {
    id: "ash-cafe",
    title: "آش كافيه (Ash Cafe)",
    client: "ASH Cafe",
    location: "جدة - المملكة العربية السعودية",
    area: "مقهى عصري",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "تنفيذ كامل لجميع بنود المقهى",
      "أعمال الكهروميكانيك وبار إعداد القهوة المتقدم",
      "الأثاث المريح والإنارة المودرن"
    ],
    description: "مقهى متميز للشباب والعائلات صمم ونفذ بأحدث أساليب التصميم الصناعي الدافئ.",
    image: "/images/projects/ash-cafe/ash-cafe-1.jpeg",
    status: "completed"
  },
  {
    id: "cb-cafe",
    title: "سي آند بي كافيه (C&B Cafe)",
    client: "C&B Cafe",
    location: "المدينة المنورة - المملكة العربية السعودية",
    area: "مقهى راقٍ",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "أعمال التصميم والتنفيذ المتكامل",
      "تنفيذ كامل لجميع البنود المعمارية والكهروميكانيكية",
      "تصنيع الأثاث والديكورات"
    ],
    description: "أحد أبرز مقاهي المدينة المنورة شمل تصميماً وتنفيذاً متكاملاً من الفكرة وحتى التسليم والتشغيل.",
    image: "/images/projects/cb-cafe/cb-cafe-1.jpeg",
    status: "completed"
  },
  {
    id: "curry-leaf",
    title: "مطعم كاري ليف الهندي (Curry Leaf)",
    client: "Curry Leaf",
    location: "جدة - المملكة العربية السعودية",
    area: "مطعم فاخر",
    category: "restaurants-cafes",
    categoryLabel: "مطاعم وضيافة",
    scope: [
      "أعمال التصميم والتنفيذ الشاملة",
      "تنفيذ كامل لبنود المطعم ومطابخ الطهي",
      "التشطيبات المعمارية والديكورات الخشبية"
    ],
    description: "أحدث مشاريع الضيافة الجارية في جدة لتقديم تجربة طعام استثنائية.",
    image: "/images/projects/curry-leaf/curry-leaf-1.jpeg",
    status: "in-progress"
  }
];

export const CLIENTS = [
  {
    name: "Ashley HomeStore",
    nameAr: "آشلي للأثاث المنزلي",
    logo: "/images/clients/ashley.png",
    category: "Retail",
    desc: "صالات عرض رئيسية في جدة ومكة والدمام",
    query: "Ashley"
  },
  {
    name: "Al Rugaib Furniture",
    nameAr: "مفروشات الرقيب",
    logo: "/images/clients/alrugaib.svg",
    category: "Retail",
    desc: "معارض عملاقة ومستودعات مركزية",
    query: "Al Rugaib"
  },
  {
    name: "Sheraton Obhur Resort",
    nameAr: "منتجع شيراتون أبحر",
    logo: "/images/clients/sheraton.svg",
    category: "Hospitality",
    desc: "أعمال خشبية فندقية وأثاث راقٍ",
    query: "Sheraton"
  },
  {
    name: "Garmin KSA",
    nameAr: "جارمن السعودية",
    logo: "/images/clients/garmin.svg",
    category: "Tech",
    desc: "معرض تجاري ومقر إقليمي",
    query: "Garmin"
  },
  {
    name: "Eyewa",
    nameAr: "شركة أيوا للنظارات",
    logo: "/images/clients/eyewa.svg",
    category: "Optics",
    desc: "مقر رئيسي ومستودعات ومعارض بالمولات",
    query: "Eyewa"
  },
  {
    name: "Coastline LLC",
    nameAr: "مطعم وكافيه شاطئ كويكان",
    logo: "/images/clients/coastline.svg",
    category: "Hospitality",
    desc: "شراكة استراتيجية في مشاريع الضيافة",
    query: "Coastline"
  },
  {
    name: "Al Sannat Luggage",
    nameAr: "الصنات للحقائب",
    logo: "/images/clients/alsannat.svg",
    category: "Retail",
    desc: "متاجر تجزئة متطورة",
    query: "Al Sannat"
  },
  {
    name: "BME Engineering",
    nameAr: "بروج المحترف الهندسية",
    logo: "/images/clients/bme.svg",
    category: "Consulting",
    desc: "مقرات استشارية هندسية",
    query: "BME"
  }
];

export const SERVICES = [
  {
    id: "general-contracting",
    title: "المقاولات العامة والإنشاءات",
    subtitle: "General Contracting & Mega Structures",
    description: "تنفيذ الصروح الإنشائية والمستودعات الكبرى والمصانع والهياكل المعدنية بأعلى معايير كود البناء السعودي.",
    features: [
      "معالجة التربة وتجهيز القواعد الخرسانية العميقة",
      "توريد وتصنيع وتركيب الهياكل المعدنية الثقيلة",
      "إنشاء أدوار الميزانين بمساحات تتجاوز 1,500 م²",
      "الهياكل المدنية للمصاعد والسلالم الكهربائية",
      "تنفيذ المستودعات والمصانع العملاقة حتى 25,000 م²"
    ],
    icon: "Building2",
    image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-1.jpeg"
  },
  {
    id: "commercial-fitout",
    title: "التشطيب والتجهيز التجاري الفاخر",
    subtitle: "Commercial Fit-Out & Retail Showrooms",
    description: "تشطيب معارض الأثاث والمتاجر والمقرات الإدارية لكبرى العلامات التجارية المحلية والعالمية.",
    features: [
      "أعمال الإحلال والتجديد الشاملة للصالات الكبرى",
      "الأرضيات الرخامية والبورسلان والدهانات المعمارية الفاخرة",
      "الأسقف المستعارة وأنظمة الإضاءة التوجيهية الذكية",
      "تنفيذ الواجهات الزجاجية الإنشائية والاستيل",
      "مراعاة متطلبات الهوية البصرية للعلامات العالمية (Franchise Standards)"
    ],
    icon: "Store",
    image: "/images/projects/ashley-jeddah/ashley-jeddah-luxury-furniture-showroom.jpeg"
  },
  {
    id: "restaurants-hospitality",
    title: "تجهيز وتشطيب المطاعم والكافيهات",
    subtitle: "Hospitality & Restaurant Turnkey Solutions",
    description: "قسم متخصص ومتكامل لإنجاز مشاريع الضيافة والمطاعم من المخططات وحتى التسليم والتشغيل الكامل.",
    features: [
      "تجهيز المطابخ المركزية وغرف التبريد والتجميد الصناعية",
      "أنظمة الشفط ومداخن الفحم والتكييف (HVAC) ومكافحة الحريق",
      "تصنيع الديكورات الخشبية والأثاث المخصص (Bespoke Joinery)",
      "تنفيذ الواجهات البانورامية وجلسات التراس المفتوحة",
      "مخططات تنفيذية تفصيلية (Shop Drawings) ونماذج 3D"
    ],
    icon: "UtensilsCrossed",
    image: "/images/projects/kokiyan-beach/kokiyan-beach-1.jpeg"
  },
  {
    id: "mep-industrial-flooring",
    title: "الكهروميكانيك والأرضيات الصناعية",
    subtitle: "MEP & Industrial Epoxy Systems",
    description: "شبكات القوى والإنارة والتكييف، ودهان الأرضيات بالإيبوكسي المقاوم للأحمال الثقيلة.",
    features: [
      "لوحات التوزيع الكهربائية الرئيسية وشبكات الكابلات",
      "شبكات مكافحة الحريق المعتمدة من الدفاع المدني",
      "معالجة ودهان الأرضيات الصناعية بالإيبوكسي للمستودعات",
      "توريد وتركيب رفوف التخزين عالية الارتفاع (Heavy Racks)",
      "أنظمة التحكم والمراقبة والتجهيز الإداري للمستودعات"
    ],
    icon: "Wrench",
    image: "/images/projects/alrugaib-warehouse/alrugaib-warehouse-1.jpeg"
  }
];

export const COMPANY_INFO = {
  nameAr: "مؤسسة التشييد المختلف للمقاولات العامة",
  nameEn: "Tasheed Unique General Contracting",
  shortName: "التشييد للمقاولات",
  crNumber: "4030440202",
  vatNumber: "311083874100003",
  nationalId: "7026462080",
  phone: "056 888 1224",
  phoneInternational: "+966568881224",
  email: "info@tasheedksa.com",
  mainAddress: "المملكة العربية السعودية، جدة - مركز التضامن للأعمال، حي الرحاب، مكتب رقم 406",
  branchAddress: "جدة - البساتين - مركز منال التجاري",
  whatsappUrl: "https://wa.me/966568881224",
  stats: [
    { value: "+50,000", label: "م² مساحات منفذة", sub: "مشاريع صناعية وتجارية" },
    { value: "+25", label: "مشروع منجز وقائم", sub: "في مختلف مناطق المملكة" },
    { value: "6", label: "مدن رئيسية", sub: "جدة، الرياض، مكة، تبوك، الدمام، المدينة" },
    { value: "100%", label: "اعتماد رسمي", sub: "منشآت وهيئة الزكاة والضريبة" }
  ]
};
