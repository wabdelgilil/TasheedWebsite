import { Project } from "@/types";

export type { Project };

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
    image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-grand-entrance-facade.jpeg",
    gallery: [
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-grand-entrance-facade.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-executive-restroom-marble-vanity.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-grand-furniture-exhibition-hall.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-home-accessories-display-hall.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-luxury-showroom-main-hall.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-marble-feature-wall-furniture-vignettes.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-mezzanine-panoramic-showroom-view.jpeg",
      "/images/projects/alrugaib-tabuk/alrugaib-tabuk-steel-mezzanine-structural-framework.jpeg"
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
    image: "/images/projects/ashley-jeddah/ashley-jeddah-illuminated-flagship-facade.jpeg",
    gallery: [
      "/images/projects/ashley-jeddah/ashley-jeddah-illuminated-flagship-facade.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-custom-furniture-vignettes.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-floor-demolition-renovation-stage.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-hvac-ducts-ceiling-maintenance.jpeg",
      "/images/projects/ashley-jeddah/ashley-jeddah-refurbishment-safety-hoarding-escalators.jpeg"
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
    image: "/images/projects/alrugaib-riyadh/alrugaib-riyadh-classical-facade-main-entrance.jpeg",
    gallery: [
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-classical-facade-main-entrance.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-lighting-and-ceiling-upgrade.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-luxury-living-room-vignette.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-panoramic-showroom-galleries.jpeg",
      "/images/projects/alrugaib-riyadh/alrugaib-riyadh-renovation-flooring-works.jpeg"
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
    image: "/images/projects/ashley-makkah-1/ashley-makkah-1-monumental-exterior-colonnade-facade.jpeg",
    gallery: [
      "/images/projects/ashley-makkah-1/ashley-makkah-1-monumental-exterior-colonnade-facade.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-civil-works-concrete-columns.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-escalator-and-elevator-shafts.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-mep-fire-suppression-rough-in.jpeg",
      "/images/projects/ashley-makkah-1/ashley-makkah-1-reinforced-concrete-mezzanine-structure.jpeg"
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
    image: "/images/projects/ashley-makkah-2/ashley-makkah-2-completed-retail-facade.jpeg",
    gallery: [
      "/images/projects/ashley-makkah-2/ashley-makkah-2-completed-retail-facade.jpeg",
      "/images/projects/ashley-makkah-2/ashley-makkah-2-building-expansion-steel-frame.jpeg",
      "/images/projects/ashley-makkah-2/ashley-makkah-2-concrete-footing-rebar-cage.jpeg",
      "/images/projects/ashley-makkah-2/ashley-makkah-2-deep-foundation-excavation.jpeg",
      "/images/projects/ashley-makkah-2/ashley-makkah-2-substructure-concrete-pour.jpeg"
    ],
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
    image: "/images/projects/ashley-dammam/ashley-dammam-eye-level-architectural-facade.jpeg",
    gallery: [
      "/images/projects/ashley-dammam/ashley-dammam-eye-level-architectural-facade.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-aerial-master-facade-render.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-concrete-foundation-pedestals.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-steel-roof-truss-assembly.jpeg",
      "/images/projects/ashley-dammam/ashley-dammam-structural-steel-mezzanine-erection.jpeg"
    ],
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
    image: "/images/projects/garmin-ksa/garmin-ksa-flagship-reception-moss-wall.jpeg",
    gallery: [
      "/images/projects/garmin-ksa/garmin-ksa-flagship-reception-moss-wall.jpeg",
      "/images/projects/garmin-ksa/garmin-ksa-marine-radar-electronics-station.jpeg",
      "/images/projects/garmin-ksa/garmin-ksa-smartwatch-display-islands.jpeg",
      "/images/projects/garmin-ksa/garmin-ksa-tacx-indoor-cycling-testing-zone.jpeg",
      "/images/projects/garmin-ksa/garmin-ksa-topographic-floor-cladding-fitout.jpeg"
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
    image: "/images/projects/alsannat-luggage/alsannat-luggage-exhibition-booth-facade.jpeg",
    gallery: [
      "/images/projects/alsannat-luggage/alsannat-luggage-exhibition-booth-facade.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-brand-graphics-cladding.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-counter-and-lighting.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-custom-timber-joinery.jpeg",
      "/images/projects/alsannat-luggage/alsannat-luggage-display-shelving-units.jpeg"
    ],
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
    image: "/images/projects/thaob-alami/thaob-alami-industrial-complex-aerial-render.jpeg",
    gallery: [
      "/images/projects/thaob-alami/thaob-alami-industrial-complex-aerial-render.jpeg",
      "/images/projects/thaob-alami/thaob-alami-factory-hangar-internal-space.jpeg",
      "/images/projects/thaob-alami/thaob-alami-fire-protection-and-mep-systems.jpeg",
      "/images/projects/thaob-alami/thaob-alami-industrial-cladding-and-roofing.jpeg",
      "/images/projects/thaob-alami/thaob-alami-structural-steel-beams-fabrication.jpeg"
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
    image: "/images/projects/alrugaib-warehouse/alrugaib-warehouse-glossy-epoxy-flooring-high-bay-racks.jpeg",
    gallery: [
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-glossy-epoxy-flooring-high-bay-racks.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-administrative-offices-fitout.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-heavy-duty-racking-installation.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-industrial-high-speed-doors.jpeg",
      "/images/projects/alrugaib-warehouse/alrugaib-warehouse-maintenance-workshop.jpeg"
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
    image: "/images/projects/eyewa-warehouse/eyewa-warehouse-mezzanine-administrative-office.jpeg",
    gallery: [
      "/images/projects/eyewa-warehouse/eyewa-warehouse-mezzanine-administrative-office.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-concrete-flooring-prep.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-firefighting-and-hvac.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-high-bay-pallet-racks.jpeg",
      "/images/projects/eyewa-warehouse/eyewa-warehouse-open-mezzanine-storage-hall.jpeg"
    ],
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
    image: "/images/projects/eyewa-hq/eyewa-hq-brand-teal-executive-open-office.jpeg",
    gallery: [
      "/images/projects/eyewa-hq/eyewa-hq-brand-teal-executive-open-office.jpeg",
      "/images/projects/eyewa-hq/eyewa-hq-acoustics-and-flooring.jpeg",
      "/images/projects/eyewa-hq/eyewa-hq-glass-partition-meeting-rooms.jpeg",
      "/images/projects/eyewa-hq/eyewa-hq-modern-reception-waiting-zone.jpeg",
      "/images/projects/eyewa-hq/eyewa-hq-open-workstations-lighting.jpeg"
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
    image: "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-storefront-facade.jpeg",
    gallery: [
      "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-storefront-facade.jpeg",
      "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-circular-eyewear-display-counters.jpeg",
      "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-gypsum-partition-ceiling-framing.jpeg",
      "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-mep-ceiling-rough-in.jpeg",
      "/images/projects/eyewa-yasmin/eyewa-yasmin-mall-optical-consultation-bar.jpeg"
    ],
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
    image: "/images/projects/bme-consulting/bme-consulting-executive-meeting-room.jpeg",
    gallery: [
      "/images/projects/bme-consulting/bme-consulting-executive-meeting-room.jpeg",
      "/images/projects/bme-consulting/bme-consulting-architectural-finishes-corridor.jpeg",
      "/images/projects/bme-consulting/bme-consulting-electromechanical-lighting.jpeg",
      "/images/projects/bme-consulting/bme-consulting-glass-partition-executive-office.jpeg",
      "/images/projects/bme-consulting/bme-consulting-reception-waiting-lounge.jpeg"
    ],
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
    image: "/images/projects/sohair/sohair-headquarters-facade-entrance.jpeg",
    gallery: [
      "/images/projects/sohair/sohair-headquarters-facade-entrance.jpeg",
      "/images/projects/sohair/sohair-custom-wood-doors-joinery.jpeg",
      "/images/projects/sohair/sohair-luxury-beauty-lounge-interior.jpeg",
      "/images/projects/sohair/sohair-wall-cladding-acoustic-panels.jpeg"
    ],
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
    image: "/images/projects/villa-tala/villa-tala-luxury-residential-living-salon.jpeg",
    gallery: [
      "/images/projects/villa-tala/villa-tala-luxury-residential-living-salon.jpeg",
      "/images/projects/villa-tala/villa-tala-bespoke-solid-wood-doors.jpeg",
      "/images/projects/villa-tala/villa-tala-contemporary-marble-salon-reception.jpeg",
      "/images/projects/villa-tala/villa-tala-executive-powder-room-fitout.jpeg",
      "/images/projects/villa-tala/villa-tala-ornate-gypsum-ceiling-details.jpeg"
    ],
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
    image: "/images/projects/sheraton-resort/sheraton-resort-dining-hall-greenery-lattice.jpeg",
    gallery: [
      "/images/projects/sheraton-resort/sheraton-resort-dining-hall-greenery-lattice.jpeg",
      "/images/projects/sheraton-resort/sheraton-resort-buffet-islands-marble-casework.jpeg",
      "/images/projects/sheraton-resort/sheraton-resort-coastal-restaurant-banquettes.jpeg",
      "/images/projects/sheraton-resort/sheraton-resort-custom-wood-lattice-suite-divider.jpeg",
      "/images/projects/sheraton-resort/sheraton-resort-presidential-suite-living-room.jpeg"
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
    image: "/images/projects/kokiyan-beach/kokiyan-beach-panoramic-seaside-dining-hall.jpeg",
    gallery: [
      "/images/projects/kokiyan-beach/kokiyan-beach-panoramic-seaside-dining-hall.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-coastal-dining-terrace.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-commercial-stainless-kitchen.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-custom-bar-counter.jpeg",
      "/images/projects/kokiyan-beach/kokiyan-beach-refrigeration-ventilation-works.jpeg"
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
    image: "/images/projects/balcony-restaurant/balcony-restaurant-vaulted-dining-hall.jpeg",
    gallery: [
      "/images/projects/balcony-restaurant/balcony-restaurant-vaulted-dining-hall.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-custom-woodwork-booths.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-geometric-marble-flooring.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-outdoor-terrace-seating.jpeg",
      "/images/projects/balcony-restaurant/balcony-restaurant-turned-wood-mashrabiya-staircase.jpeg"
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
    image: "/images/projects/villa-fayzouza/villa-fayzouza-bougainvillea-facade-entrance.jpeg",
    gallery: [
      "/images/projects/villa-fayzouza/villa-fayzouza-bougainvillea-facade-entrance.jpeg",
      "/images/projects/villa-fayzouza/villa-fayzouza-crystal-chandeliers-dining.jpeg",
      "/images/projects/villa-fayzouza/villa-fayzouza-custom-glass-work-casework.jpeg",
      "/images/projects/villa-fayzouza/villa-fayzouza-emerald-trellis-dining-arches.jpeg",
      "/images/projects/villa-fayzouza/villa-fayzouza-luxury-reception-mosaic-hall.jpeg"
    ],
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
    image: "/images/projects/cken-restaurant/cken-restaurant-modern-order-counter.jpeg",
    gallery: [
      "/images/projects/cken-restaurant/cken-restaurant-modern-order-counter.jpeg",
      "/images/projects/cken-restaurant/cken-restaurant-custom-wood-furniture-booths.jpeg",
      "/images/projects/cken-restaurant/cken-restaurant-industrial-ceiling-fitout.jpeg",
      "/images/projects/cken-restaurant/cken-restaurant-order-hall-panoramic.jpeg",
      "/images/projects/cken-restaurant/cken-restaurant-stainless-commercial-kitchen.jpeg"
    ],
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
    image: "/images/projects/dar-biryani/dar-biryani-illuminated-night-facade.jpeg",
    gallery: [
      "/images/projects/dar-biryani/dar-biryani-illuminated-night-facade.jpeg",
      "/images/projects/dar-biryani/dar-biryani-blockwork-masonry-civil-construction.jpeg",
      "/images/projects/dar-biryani/dar-biryani-custom-furniture-seating-hall.jpeg",
      "/images/projects/dar-biryani/dar-biryani-electromechanical-ducts-ceiling.jpeg",
      "/images/projects/dar-biryani/dar-biryani-oriental-fine-dining-hall.jpeg"
    ],
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
    image: "/images/projects/sezione-restaurant/sezione-restaurant-luxury-crystal-chandeliers-emerald-bar.jpeg",
    gallery: [
      "/images/projects/sezione-restaurant/sezione-restaurant-luxury-crystal-chandeliers-emerald-bar.jpeg",
      "/images/projects/sezione-restaurant/sezione-restaurant-copper-canopy-emerald-bar.jpeg",
      "/images/projects/sezione-restaurant/sezione-restaurant-integrated-olive-tree-marble-table.jpeg",
      "/images/projects/sezione-restaurant/sezione-restaurant-italian-wood-wall-paneling.jpeg",
      "/images/projects/sezione-restaurant/sezione-restaurant-terrazzo-flooring-booth-seating.jpeg"
    ],
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
    image: "/images/projects/zaikaki-indian/zaikaki-indian-emerald-marble-wood-sunburst-portal.jpeg",
    gallery: [
      "/images/projects/zaikaki-indian/zaikaki-indian-emerald-marble-wood-sunburst-portal.jpeg",
      "/images/projects/zaikaki-indian/zaikaki-indian-custom-warm-woodwork-ambiance.jpeg",
      "/images/projects/zaikaki-indian/zaikaki-indian-handcrafted-wooden-elephant-console.jpeg",
      "/images/projects/zaikaki-indian/zaikaki-indian-luxury-dining-hall-mirrors.jpeg"
    ],
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
    image: "/images/projects/ash-cafe/ash-cafe-illuminated-night-facade.jpeg",
    gallery: [
      "/images/projects/ash-cafe/ash-cafe-illuminated-night-facade.jpeg",
      "/images/projects/ash-cafe/ash-cafe-drive-thru-window-canopy.jpeg",
      "/images/projects/ash-cafe/ash-cafe-microcement-counter-fitout.jpeg",
      "/images/projects/ash-cafe/ash-cafe-modern-barista-station.jpeg"
    ],
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
    image: "/images/projects/cb-cafe/cb-cafe-scandinavian-lounge-interior.jpeg",
    gallery: [
      "/images/projects/cb-cafe/cb-cafe-scandinavian-lounge-interior.jpeg",
      "/images/projects/cb-cafe/cb-cafe-minimalist-staircase-vertical-balusters.jpeg",
      "/images/projects/cb-cafe/cb-cafe-specialty-coffee-bar-design.jpeg",
      "/images/projects/cb-cafe/cb-cafe-structural-shell-masonry-progress.jpeg",
      "/images/projects/cb-cafe/cb-cafe-terrace-glass-facade-site-inspection.jpeg"
    ],
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
    image: "/images/projects/curry-leaf/curry-leaf-mughal-arched-dining-design.jpeg",
    gallery: [
      "/images/projects/curry-leaf/curry-leaf-mughal-arched-dining-design.jpeg",
      "/images/projects/curry-leaf/curry-leaf-arched-portal-screen-detail.jpeg",
      "/images/projects/curry-leaf/curry-leaf-banquette-seating-joinery.jpeg",
      "/images/projects/curry-leaf/curry-leaf-raw-concrete-demolition-before.jpeg",
      "/images/projects/curry-leaf/curry-leaf-site-execution-progress.jpeg"
    ],
    status: "in-progress"
  }
];

export { CLIENTS } from "./clients";
export { SERVICES } from "./services";
export { COMPANY_INFO } from "./company";
