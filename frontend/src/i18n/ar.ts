const ar = {
  common: {
    or: 'أو',
    cancel: 'إلفاء',
    reset: 'إعادة ضبط',
    save: 'حفظ',
    search: 'يحث',
    edit: 'تعديل',
    remove: 'حذف',
    new: 'جديد',
    export: 'تصدير لملف اكسل',
    noDataToExport: 'لا توجد بيانات للتصدير',
    import: 'يستورد',
    discard: 'ينبذ',
    yes: 'نعم',
    no: 'لا',
    pause: 'يوقف',
    areYouSure: 'هل أنت واثق؟',
    view: 'معاينة',
    destroy: 'حذف',
    mustSelectARow: 'يجب تحديد صف',
    confirm: 'تأكيد',
    start: 'بداية',
    end: 'نهاية',
    filters: 'فلتر',
  },

  app: {
    title: 'طلب',
  },

  api: {
    menu: 'API',
  },

  entities: {
    candidates: {
        name: 'مرشحين',
        label: 'المرشحين',
        menu: 'المرشحين',
        exporterFileName: 'candidates_export',
        list: {
          menu: 'المرشحين',
          title: 'المرشحين',
        },
        create: {
          success: ' تم حفظ المرشحين بنجاح',
        },
        update: {
          success: 'تم حفظ المرشحين بنجاح',
        },
        destroy: {
          success: 'تم حذف المرشحين بنجاح',
        },
        destroyAll: {
          success: 'تم حذف المرشحين بنجاح',
        },
        edit: {
          title: 'تعديل مرشحين',
        },
        fields: {
          id: 'Id',
          'candidateName': 'اسم المرشح',
          'currentPosition': 'المنصب الحالى',
          'candidateReference': 'مرجع المرشح',
          'gender': 'نوع الجنس',
          'academicCertificateSpecialization': 'الشهادة العلمية و الاختصاص',
          'trainingCertificates': 'شهادات_تدريب',
          'currentCompany': 'الشركة الحالية',
          'noticePeriodRange': 'فترة إشعار',
          'noticePeriod': 'فترة إشعار',
          'currentSalaryRange': 'الراتب الحالي',
          'currentSalary': 'الراتب الحالي',
          'expectedSalaryRange': 'الراتب المتوقع',
          'expectedSalary': 'الراتب المتوقع',
          'softSkills': 'مهارات ناعمة',
          'managementSkills': 'مهارات الإدارة',
          'artisticSkills': 'مهارات فنية',
          'candidateCreatedDateRange': 'تاريخ إنشاء المرشح',
          'candidateCreatedDate': 'تاريخ إنشاء المرشح',
          'jobs': 'الوظيفة المسندة',
          'resume': 'السيرة الذاتية',
          'photo': 'صورة الموظف ',
          'tactLevel': 'مستوى اللباقة',
          'yearsExperienceRange': 'سنوات الخبرة',
          'yearsExperience': 'سنوات الخبرة',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'ذكر': 'ذكر',
            'أنثى': 'أنثى',
          },
          'tactLevel': {
            'عالي': 'عالي',
            'عادي': 'عادي',
          },
        },
        placeholders: {
          'candidateName': 'اسم المرشح',
          'currentPosition': 'المنصب الحالى',
          'candidateReference': 'مرجع المرشح',
          'gender': 'نوع الجنس',
          'academicCertificateSpecialization': 'الشهادة العلمية و الاختصاص',
          'currentCompany': 'الشركة الحالية',
          'noticePeriod': 'فترة إشعار',
          'candidateCreatedDate': 'تاريخ إنشاء المرشح',
        },
        hints: {
          'resume': 'السيرة الذاتية',
          'photo': 'صورة الموظف ',
        },
        new: {
          title: 'جديدالمرشحين',
        },
        view: {
          title: 'معاينة المرشحين',
        },
        importer: {
          title: 'استيراد المرشحين',
          fileName: 'candidates_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
        },
      },

    jobs: {
        name: 'jobs',
        label: 'وظائف',
        menu: 'وظائف',
        exporterFileName: 'jobs_export',
        list: {
          menu: 'وظائف',
          title: 'وظائف',
        },
        create: {
          success: 'حفظ الوظائف بنجاح',
        },
        update: {
          success: 'حفظ الوظائف بنجاح',
        },
        destroy: {
          success: 'حذف الوظائف بنجاح',
        },
        destroyAll: {
          success: 'حذف الوظائف بنجاح',
        },
        edit: {
          title: 'Edit وظائف',
        },
        fields: {
          id: 'Id',
          'positionName': 'المسمى الوظيفي',
          'department': 'القسم / الادارة',
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'releaseDateRange': 'تاريخ الاصدار',
          'releaseDate': 'تاريخ الاصدار',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
          'leaves': 'Leaves',
          'personalAndTechnicalSkills': 'المهارات الشخصية و التقنية',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'department': 'department',
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'releaseDate': 'تاريخ الاصدار',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
        },
        hints: {

        },
        new: {
          title: 'جديد وظائف',
        },
        view: {
          title: 'معاينة وظائف',
        },
        importer: {
          title: 'Import وظائف',
          fileName: 'jobs_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة',
        },
      },

    departments: {
        name: 'departments',
        label: 'الاقسام ',
        menu: 'الاقسام ',
        exporterFileName: 'departments_export',
        list: {
          menu: 'الاقسام ',
          title: 'الاقسام ',
        },
        create: {
          success: 'تم حفظ الأقسام بنجاح',
        },
        update: {
          success: 'تم حفظ الأقسام بنجاح',
        },
        destroy: {
          success: 'تم حذف الأقسام بنجاح',
        },
        destroyAll: {
          success: 'تم حذف الأقسام بنجاح',
        },
        edit: {
          title: 'تعديل الاقسام ',
        },
        fields: {
          id: 'Id',
          'departmentName': 'اسم القسم ',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'جديد الاقسام ',
        },
        view: {
          title: 'معاينة الاقسام ',
        },
        importer: {
          title: 'استيراد الاقسام ',
          fileName: 'departments_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة',
        },
      },

    academicCertificates: {
        name: 'academicCertificates',
        label: 'الشهادات الاكاديمية',
        menu: 'الشهادات الاكاديمية',
        exporterFileName: 'academicCertificates_export',
        list: {
          menu: 'الشهادات الاكاديمية',
          title: 'الشهادات الاكاديمية',
        },
        create: {
          success: 'الشهادات الاكاديمية successfully saved',
        },
        update: {
          success: 'الشهادات الاكاديمية successfully saved',
        },
        destroy: {
          success: 'الشهادات الاكاديمية successfully deleted',
        },
        destroyAll: {
          success: 'الشهادات الاكاديمية(s) successfully deleted',
        },
        edit: {
          title: 'Edit الشهادات الاكاديمية',
        },
        fields: {
          id: 'Id',
          'academicCertificates': 'الشهادات الاكاديمية',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New الشهادات الاكاديمية',
        },
        view: {
          title: 'View الشهادات الاكاديمية',
        },
        importer: {
          title: 'Import الشهادات الاكاديمية',
          fileName: 'academicCertificates_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة.',
        },
      },

    softSkills: {
        name: 'softSkills',
        label: 'المهارات الناعمة',
        menu: 'المهارات الناعمة',
        exporterFileName: 'softSkills_export',
        list: {
          menu: 'المهارات الناعمة',
          title: 'المهارات الناعمة',
        },
        create: {
          success: ' تم حفظ المهارات الناعمة',
        },
        update: {
          success: 'تم حفظ المهارات الناعمة ',
        },
        destroy: {
          success: 'تم حذف المهارات الناعمة',
        },
        destroyAll: {
          success: 'تم حذف المهارات الناعمة ',
        },
        edit: {
          title: 'تعديل المهارات الناعمة',
        },
        fields: {
          id: 'Id',
          'name': 'المهارات الناعمة',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'المهارات الناعمة',
        },
        hints: {
          'name': 'المهارات الناعمة',
        },
        new: {
          title: 'جديد المهارات الناعمة',
        },
        view: {
          title: 'معاينة المهارات الناعمة',
        },
        importer: {
          title: 'استيراد المهارات الناعمة',
          fileName: 'softSkills_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة',
        },
      },

    trainingCertificates: {
        name: 'trainingCertificates',
        label: 'الشهادات التدريبية',
        menu: 'الشهادات التدريبية',
        exporterFileName: 'trainingCertificates_export',
        list: {
          menu: 'الشهادات التدريبية',
          title: 'الشهادات التدريبية',
        },
        create: {
          success: ' نم حفظ الشهادات التدريبية',
        },
        update: {
          success: ' نم حفظ الشهادات التدريبية',
        },
        destroy: {
          success: ' نم حذف الشهادات التدريبية',
        },
        destroyAll: {
          success: ' نم حذف الشهادات التدريبية',
        },
        edit: {
          title: 'تعديل الشهادات التدريبية',
        },
        fields: {
          id: 'Id',
          'trainingCertificates': 'Training certificates',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'جديد الشهادات التدريبية',
        },
        view: {
          title: 'معاينة الشهادات التدريبية',
        },
        importer: {
          title: 'استيراد الشهادات التدريبية',
          fileName: 'trainingCertificates_import_template',
          hint:
            'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة',
        },
      },

    professionalCertifications: {
        name: 'professionalCertifications',
        label: 'الشهادات المهنية',
        menu: 'الشهادات المهنية',
        exporterFileName: 'professionalCertifications_export',
        list: {
          menu: 'الشهادات المهنية',
          title: 'الشهادات المهنية',
        },
        create: {
          success: ' تم حغظ الشهادات المهنية',
        },
        update: {
          success: ' نم حفظ الشهادات المهنية',
        },
        destroy: {
          success: 'نم حذف الشهادات المهنية',
        },
        destroyAll: {
          success: 'نم حذف الشهادات المهنية',
        },
        edit: {
          title: 'تعديل الشهادات المهنية',
        },
        fields: {
          id: 'Id',
          'professionalCertifications': 'الشهادات المهنية',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'professionalCertifications': 'الشهادات المهنية',
        },
        hints: {
          'professionalCertifications': 'الشهادات المهنية',
        },
        new: {
          title: 'جديد الشهادات المهنية',
        },
        view: {
          title: 'معاينة الشهادات المهنية',
        },
        importer: {
          title: 'استيراد الشهادات المهنية',
          fileName: 'professionalCertifications_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    managementSkills: {
        name: 'managementSkills',
        label: 'مهارات الإدارة',
        menu: 'مهارات الإدارة',
        exporterFileName: 'managementSkills_export',
        list: {
          menu: 'مهارات الإدارة',
          title: 'مهارات الإدارة',
        },
        create: {
          success: ' تم حفظ مهارات الإدارة',
        },
        update: {
          success: 'تم حفظ مهارات الإدارة ',
        },
        destroy: {
          success: 'تم حذف مهارات الإدارة ',
        },
        destroyAll: {
          success: 'تم حذف مهارات الإدارة ',
        },
        edit: {
          title: 'تعديل مهارات الإدارة',
        },
        fields: {
          id: 'Id',
          'managementSkills': 'مهارات الإدارة',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: ' جديد مهارات الإدارة',
        },
        view: {
          title: 'معاينة مهارات الإدارة',
        },
        importer: {
          title: 'Import مهارات الإدارة',
          fileName: 'managementSkills_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    artisticSkills: {
        name: 'artisticSkills',
        label: 'المهارات الفنية',
        menu: 'المهارات الفنية',
        exporterFileName: 'artisticSkills_export',
        list: {
          menu: 'المهارات الفنية',
          title: 'المهارات الفنية',
        },
        create: {
          success: ' تم حفظ المهارات الفنية',
        },
        update: {
          success: ' تم حفظ المهارات الفنية',
        },
        destroy: {
          success: ' تم حذف المهارات الفنية',
        },
        destroyAll: {
          success: ' تم حذف المهارات الفنية',
        },
        edit: {
          title: 'Edit المهارات الفنية',
        },
        fields: {
          id: 'Id',
          'artisticSkills': 'المهارات الفنية',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New المهارات الفنية',
        },
        view: {
          title: 'View المهارات الفنية',
        },
        importer: {
          title: 'Import المهارات الفنية',
          fileName: 'artisticSkills_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    clients: {
        name: 'clients',
        label: 'العملاء',
        menu: 'العملاء',
        exporterFileName: 'clients_export',
        list: {
          menu: 'العملاء',
          title: 'العملاء',
        },
        create: {
          success: 'العملاء successfully saved',
        },
        update: {
          success: 'العملاء successfully saved',
        },
        destroy: {
          success: 'العملاء successfully deleted',
        },
        destroyAll: {
          success: 'العملاء(s) successfully deleted',
        },
        edit: {
          title: 'Edit العملاء',
        },
        fields: {
          id: 'Id',
          'clientName': 'اسم العميل ',
          'jobCountRange': 'عدد الوظائف',
          'jobCount': 'عدد الوظائف',
          'clientIndustry': 'صناعة العميل',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New العملاء',
        },
        view: {
          title: 'View العملاء',
        },
        importer: {
          title: 'Import العملاء',
          fileName: 'clients_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    usersNew: {
        name: 'usersNew',
        label: 'المستخدمين',
        menu: 'المستخدمين',
        exporterFileName: 'usersNew_export',
        list: {
          menu: 'المستخدمين',
          title: 'المستخدمين',
        },
        create: {
          success: 'المستخدمين successfully saved',
        },
        update: {
          success: 'المستخدمين successfully saved',
        },
        destroy: {
          success: 'المستخدمين successfully deleted',
        },
        destroyAll: {
          success: 'المستخدمين(s) successfully deleted',
        },
        edit: {
          title: 'Edit المستخدمين',
        },
        fields: {
          id: 'Id',
          'email': 'البريد الالكتروني',
          'firsrtName': 'الاسم الاول ',
          'secondName': 'الاسم الثاني',
          'phoneNumber': 'رقم الهاتف',
          'roles': 'الأدوار',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'roles': {
            'مدراء الاقسام': 'مدراء الاقسام',
            'العملاء': 'العملاء',
            'الموظفين': 'الموظفين',
            'مدير الموقع': 'مدير الموقع',
          },
        },
        placeholders: {
          'email': 'البريد الالكتروني',
          'firsrtName': 'الاسم الاول ',
          'secondName': 'الاسم الثاني',
          'phoneNumber': 'رقم الهاتف',
          'roles': 'الأدوار',
        },
        hints: {

        },
        new: {
          title: 'New المستخدمين',
        },
        view: {
          title: 'View المستخدمين',
        },
        importer: {
          title: 'Import المستخدمين',
          fileName: 'usersNew_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    jobFrameworks: {
        name: 'jobFrameworks',
        label: 'أطر الوظيفة',
        menu: 'أطر الوظيفة',
        exporterFileName: 'jobFrameworks_export',
        list: {
          menu: 'أطر الوظيفة',
          title: 'أطر الوظيفة',
        },
        create: {
          success: 'أطر الوظيفة successfully saved',
        },
        update: {
          success: 'أطر الوظيفة successfully saved',
        },
        destroy: {
          success: 'أطر الوظيفة successfully deleted',
        },
        destroyAll: {
          success: 'أطر الوظيفة(s) successfully deleted',
        },
        edit: {
          title: 'Edit أطر الوظيفة',
        },
        fields: {
          id: 'Id',
          'takeMultipleTasks': 'تولي مهام متعددة',
          'impactSalary': 'التأثير على الراتب',
          'impactJobGrade': 'التأثير على الدرجة الوظيفية',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New أطر الوظيفة',
        },
        view: {
          title: 'View أطر الوظيفة',
        },
        importer: {
          title: 'Import أطر الوظيفة',
          fileName: 'jobFrameworks_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    leaveApplicationForm: {
        name: 'leaveApplicationForm',
        label: 'استمارة طلب إجازة',
        menu: 'استمارة طلب إجازة',
        exporterFileName: 'leaveApplicationForm_export',
        list: {
          menu: 'استمارة طلب إجازة',
          title: 'استمارة طلب إجازة',
        },
        create: {
          success: 'استمارة طلب إجازة successfully saved',
        },
        update: {
          success: 'استمارة طلب إجازة successfully saved',
        },
        destroy: {
          success: 'استمارة طلب إجازة successfully deleted',
        },
        destroyAll: {
          success: 'استمارة طلب إجازة(s) successfully deleted',
        },
        edit: {
          title: 'Edit استمارة طلب إجازة',
        },
        fields: {
          id: 'Id',
          'name': 'الاسم',
          'position': 'المنصب',
          'department': 'القسم',
          'dateRange': 'التاريخ',
          'date': 'التاريخ',
          'contactNo': 'رقم الاتصال',
          'employeeNo': 'رقم الموظف',
          'absenceWorkRange': 'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
          'absenceWork': 'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
          'periodRange': 'من ______ إلى _______ ، ضمناً',
          'period': 'من ______ إلى _______ ، ضمناً',
          'specify': 'أسباب الغياب:',
          'reasons': 'نوع الاجازات',
          'others': ':',
          'noDaysRange': 'عدد الأيام المتاحة',
          'noDays': 'عدد الأيام المتاحة',
          'noTakenRange': 'عدد أيام الإجازة المأخوذة',
          'noTaken': 'عدد أيام الإجازة المأخوذة',
          'noBalanceRange': 'عدد أيام رصيد الإجازة',
          'noBalance': 'عدد أيام رصيد الإجازة',
          'remarks': 'ملاحظات',
          'status': 'حالة طلب الإجازة',
          'jobs': 'Jobs',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'reasons': {
            'الإجازة السنوية': 'الإجازة السنوية',
            'الإجازة المرضية': 'الإجازة المرضية',
            'إجازة الأمومة': 'إجازة الأمومة',
            'إجازة الرأفة': 'إجازة الرأفة',
            'إجازة غير مدفوعة الأجر': 'إجازة غير مدفوعة الأجر',
            'أخرى يرجى التحديد:': 'أخرى يرجى التحديد:',
          },
          'status': {
            'تمت الموافقة عليها من قبل الإدارة المختصة': 'تمت الموافقة عليها من قبل الإدارة المختصة',
            'رفضتها الإدارة المختصة': 'رفضتها الإدارة المختصة',
            'موافقة إدارة الموارد البشرية': 'موافقة إدارة الموارد البشرية',
            'رفضنها إدارة الموارد البشرية': 'رفضنها إدارة الموارد البشرية',
            'موافقة المدير العام': 'موافقة المدير العام',
            'رفضها المدير العام': 'رفضها المدير العام',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New استمارة طلب إجازة',
        },
        view: {
          title: 'View استمارة طلب إجازة',
        },
        importer: {
          title: 'Import استمارة طلب إجازة',
          fileName: 'leaveApplicationForm_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'هوية شخصية',
      avatars: 'الصورة الرمزية',
      email: 'بريد إلكتروني',
      emails: 'رسائل البريد الإلكتروني',
      fullName: 'اسم بالكامل',
      firstName: 'الاسم الاول',
      lastName: 'الاسم الأخير',
      status: 'حالة',
      phoneNumber: 'رقم الهاتف',
      role: 'دور',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'مستخدمين',
    menu: 'Users',
    doAddSuccess: 'تم حفظ مستخدم بنجاح',
    doUpdateSuccess: 'تم حفظ مستخدم بنجاح',
    exporterFileName: 'users_export',
    doDestroySuccess: 'تم حذف مستخدم بنجاح',
    doDestroyAllSuccess: 'تم حذف مستخدم بنجاح',
    edit: {
      title: 'تعديل مستخدم',
    },
    new: {
      title: 'دعوة مستخدم',
      titleModal: 'Invite User',
      emailsHint:
        'افصل بين عناوين البريد الإلكتروني المتعددة باستخدام حرف الفاصلة.',
    },
    view: {
      title: 'معاينة مستخدم',
      activity: 'Activity',
    },
    importer: {
      title: 'استيراد المستخدمين',
      fileName: 'users_import_template',
      hint:
        'يجب أن تكون أعمدة الملفات / الصور عناوين URL للملفات مفصولة بمسافة. يجب أن تكون العلاقات معرّف السجلات المرجعية مفصولة بمسافة. يجب أن تكون الأدوار هي معرفات الدور مفصولة بمسافة.',
    },
    errors: {
      userAlreadyExists:
        'المستخدم مع هذا البريد الإلكتروني موجود بالفعل',
      userNotFound: 'لم يتم العثور على المستخدم',
      revokingOwnPermission: `لا يمكنك إبطال إذن المسؤول الخاص بك`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default ar;
