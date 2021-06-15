const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
    start: 'Comienzo',
    end: 'Final',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },

  entities: {
    jobs: {
        name: 'jobs',
        label: 'وظائف',
        menu: 'وظائف',
        exporterFileName: 'exportacion_jobs',
        list: {
          menu: 'وظائف',
          title: 'وظائف',
        },
        create: {
          success: 'وظائف guardado con éxito',
        },
        update: {
          success: 'وظائف guardado con éxito',
        },
        destroy: {
          success: 'وظائف eliminado con éxito',
        },
        destroyAll: {
          success: 'وظائف(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar وظائف',
        },
        fields: {
          id: 'Id',
          'positionName': 'المسمى الوظيفي',
          'department': 'القسم / الادارة',
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
          'academicCertificates': 'الشهادات الأكاديمية',
          'trainingCertificates': 'الشهادات التدريبية',
          'professionalCertificates': 'الشهادات المهنية',
          'softSkills': 'المهارات الناعمة',
          'managementSkills': 'المهارات الإدارية',
          'artitistikSkills': 'ArtitistikSkills',
          'jobFramework': 'أطر الوظيفة',
          'connectionLevel': 'مستوى الاتصال',
          'commonCommittees': 'أللجان المشتركة',
          'jobRequirments': 'متطلبات الوظيفة',
          'jobPath': 'المسار الوظيفي',
          'tasksDuties': 'المهام و الواجبات',
          'administrativeFinancialPowers': 'الصلاحيات الإدارية و المالية',
          'cardInformation': 'بيانات البطاقة',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
        },
        hints: {

        },
        new: {
          title: 'Nuevo وظائف',
        },
        view: {
          title: 'Ver وظائف',
        },
        importer: {
          title: 'Importar وظائف',
          fileName: 'jobs_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    candidates: {
        name: 'candidates',
        label: 'المتقدمين',
        menu: 'المتقدمين',
        exporterFileName: 'exportacion_candidates',
        list: {
          menu: 'المتقدمين',
          title: 'المتقدمين',
        },
        create: {
          success: 'المتقدمين guardado con éxito',
        },
        update: {
          success: 'المتقدمين guardado con éxito',
        },
        destroy: {
          success: 'المتقدمين eliminado con éxito',
        },
        destroyAll: {
          success: 'المتقدمين(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar المتقدمين',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo المتقدمين',
        },
        view: {
          title: 'Ver المتقدمين',
        },
        importer: {
          title: 'Importar المتقدمين',
          fileName: 'candidates_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    academicCertificates: {
        name: 'academicCertificates',
        label: 'الشهادات الاكاديمية',
        menu: 'الشهادات الاكاديمية',
        exporterFileName: 'exportacion_academicCertificates',
        list: {
          menu: 'الشهادات الاكاديمية',
          title: 'الشهادات الاكاديمية',
        },
        create: {
          success: 'الشهادات الاكاديمية guardado con éxito',
        },
        update: {
          success: 'الشهادات الاكاديمية guardado con éxito',
        },
        destroy: {
          success: 'الشهادات الاكاديمية eliminado con éxito',
        },
        destroyAll: {
          success: 'الشهادات الاكاديمية(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الشهادات الاكاديمية',
        },
        fields: {
          id: 'Id',
          'academicCertificates': 'الشهادات الاكاديمية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo الشهادات الاكاديمية',
        },
        view: {
          title: 'Ver الشهادات الاكاديمية',
        },
        importer: {
          title: 'Importar الشهادات الاكاديمية',
          fileName: 'academicCertificates_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    softSkills: {
        name: 'softSkills',
        label: 'المهارات الناعمة',
        menu: 'المهارات الناعمة',
        exporterFileName: 'exportacion_softSkills',
        list: {
          menu: 'المهارات الناعمة',
          title: 'المهارات الناعمة',
        },
        create: {
          success: 'المهارات الناعمة guardado con éxito',
        },
        update: {
          success: 'المهارات الناعمة guardado con éxito',
        },
        destroy: {
          success: 'المهارات الناعمة eliminado con éxito',
        },
        destroyAll: {
          success: 'المهارات الناعمة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar المهارات الناعمة',
        },
        fields: {
          id: 'Id',
          'name': 'المهارات الناعمة',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo المهارات الناعمة',
        },
        view: {
          title: 'Ver المهارات الناعمة',
        },
        importer: {
          title: 'Importar المهارات الناعمة',
          fileName: 'softSkills_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    trainingCertificates: {
        name: 'trainingCertificates',
        label: 'الشهادات التدريبية',
        menu: 'الشهادات التدريبية',
        exporterFileName: 'exportacion_trainingCertificates',
        list: {
          menu: 'الشهادات التدريبية',
          title: 'الشهادات التدريبية',
        },
        create: {
          success: 'الشهادات التدريبية guardado con éxito',
        },
        update: {
          success: 'الشهادات التدريبية guardado con éxito',
        },
        destroy: {
          success: 'الشهادات التدريبية eliminado con éxito',
        },
        destroyAll: {
          success: 'الشهادات التدريبية(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الشهادات التدريبية',
        },
        fields: {
          id: 'Id',
          'trainingCertificates': 'Training certificates',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo الشهادات التدريبية',
        },
        view: {
          title: 'Ver الشهادات التدريبية',
        },
        importer: {
          title: 'Importar الشهادات التدريبية',
          fileName: 'trainingCertificates_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    professionalCertifications: {
        name: 'professionalCertifications',
        label: 'الشهادات المهنية',
        menu: 'الشهادات المهنية',
        exporterFileName: 'exportacion_professionalCertifications',
        list: {
          menu: 'الشهادات المهنية',
          title: 'الشهادات المهنية',
        },
        create: {
          success: 'الشهادات المهنية guardado con éxito',
        },
        update: {
          success: 'الشهادات المهنية guardado con éxito',
        },
        destroy: {
          success: 'الشهادات المهنية eliminado con éxito',
        },
        destroyAll: {
          success: 'الشهادات المهنية(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الشهادات المهنية',
        },
        fields: {
          id: 'Id',
          'professionalCertifications': 'الشهادات المهنية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo الشهادات المهنية',
        },
        view: {
          title: 'Ver الشهادات المهنية',
        },
        importer: {
          title: 'Importar الشهادات المهنية',
          fileName: 'professionalCertifications_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    managementSkills: {
        name: 'managementSkills',
        label: 'مهارات الإدارة',
        menu: 'مهارات الإدارة',
        exporterFileName: 'exportacion_managementSkills',
        list: {
          menu: 'مهارات الإدارة',
          title: 'مهارات الإدارة',
        },
        create: {
          success: 'مهارات الإدارة guardado con éxito',
        },
        update: {
          success: 'مهارات الإدارة guardado con éxito',
        },
        destroy: {
          success: 'مهارات الإدارة eliminado con éxito',
        },
        destroyAll: {
          success: 'مهارات الإدارة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar مهارات الإدارة',
        },
        fields: {
          id: 'Id',
          'managementSkills': 'مهارات الإدارة',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo مهارات الإدارة',
        },
        view: {
          title: 'Ver مهارات الإدارة',
        },
        importer: {
          title: 'Importar مهارات الإدارة',
          fileName: 'managementSkills_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    artisticSkills: {
        name: 'artisticSkills',
        label: 'المهارات الفنية',
        menu: 'المهارات الفنية',
        exporterFileName: 'exportacion_artisticSkills',
        list: {
          menu: 'المهارات الفنية',
          title: 'المهارات الفنية',
        },
        create: {
          success: 'المهارات الفنية guardado con éxito',
        },
        update: {
          success: 'المهارات الفنية guardado con éxito',
        },
        destroy: {
          success: 'المهارات الفنية eliminado con éxito',
        },
        destroyAll: {
          success: 'المهارات الفنية(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar المهارات الفنية',
        },
        fields: {
          id: 'Id',
          'artisticSkills': 'المهارات الفنية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo المهارات الفنية',
        },
        view: {
          title: 'Ver المهارات الفنية',
        },
        importer: {
          title: 'Importar المهارات الفنية',
          fileName: 'artisticSkills_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    clients: {
        name: 'clients',
        label: 'العملاء',
        menu: 'العملاء',
        exporterFileName: 'exportacion_clients',
        list: {
          menu: 'العملاء',
          title: 'العملاء',
        },
        create: {
          success: 'العملاء guardado con éxito',
        },
        update: {
          success: 'العملاء guardado con éxito',
        },
        destroy: {
          success: 'العملاء eliminado con éxito',
        },
        destroyAll: {
          success: 'العملاء(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar العملاء',
        },
        fields: {
          id: 'Id',
          'clientName': 'اسم العميل ',
          'jobCountRange': 'عدد الوظائف',
          'jobCount': 'عدد الوظائف',
          'clientIndustry': 'صناعة العميل',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo العملاء',
        },
        view: {
          title: 'Ver العملاء',
        },
        importer: {
          title: 'Importar العملاء',
          fileName: 'clients_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    usersNew: {
        name: 'usersNew',
        label: 'المستخدمين',
        menu: 'المستخدمين',
        exporterFileName: 'exportacion_usersNew',
        list: {
          menu: 'المستخدمين',
          title: 'المستخدمين',
        },
        create: {
          success: 'المستخدمين guardado con éxito',
        },
        update: {
          success: 'المستخدمين guardado con éxito',
        },
        destroy: {
          success: 'المستخدمين eliminado con éxito',
        },
        destroyAll: {
          success: 'المستخدمين(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar المستخدمين',
        },
        fields: {
          id: 'Id',
          'email': 'البريد الالكتروني',
          'firsrtName': 'الاسم الاول ',
          'secondName': 'الاسم الثاني',
          'phoneNumber': 'رقم الهاتف',
          'roles': 'الأدوار',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo المستخدمين',
        },
        view: {
          title: 'Ver المستخدمين',
        },
        importer: {
          title: 'Importar المستخدمين',
          fileName: 'usersNew_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    jobFrameworks: {
        name: 'jobFrameworks',
        label: 'أطر الوظيفة',
        menu: 'أطر الوظيفة',
        exporterFileName: 'exportacion_jobFrameworks',
        list: {
          menu: 'أطر الوظيفة',
          title: 'أطر الوظيفة',
        },
        create: {
          success: 'أطر الوظيفة guardado con éxito',
        },
        update: {
          success: 'أطر الوظيفة guardado con éxito',
        },
        destroy: {
          success: 'أطر الوظيفة eliminado con éxito',
        },
        destroyAll: {
          success: 'أطر الوظيفة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar أطر الوظيفة',
        },
        fields: {
          id: 'Id',
          'takeMultipleTasks': 'تولي مهام متعددة',
          'impactSalary': 'التأثير على الراتب',
          'impactJobGrade': 'التأثير على الدرجة الوظيفية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo أطر الوظيفة',
        },
        view: {
          title: 'Ver أطر الوظيفة',
        },
        importer: {
          title: 'Importar أطر الوظيفة',
          fileName: 'jobFrameworks_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    leaveApplicationForm: {
        name: 'leaveApplicationForm',
        label: 'استمارة طلب إجازة',
        menu: 'استمارة طلب إجازة',
        exporterFileName: 'exportacion_leaveApplicationForm',
        list: {
          menu: 'استمارة طلب إجازة',
          title: 'استمارة طلب إجازة',
        },
        create: {
          success: 'استمارة طلب إجازة guardado con éxito',
        },
        update: {
          success: 'استمارة طلب إجازة guardado con éxito',
        },
        destroy: {
          success: 'استمارة طلب إجازة eliminado con éxito',
        },
        destroyAll: {
          success: 'استمارة طلب إجازة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar استمارة طلب إجازة',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo استمارة طلب إجازة',
        },
        view: {
          title: 'Ver استمارة طلب إجازة',
        },
        importer: {
          title: 'Importar استمارة طلب إجازة',
          fileName: 'leaveApplicationForm_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    employmentContract: {
        name: 'employmentContract',
        label: 'عقد العمل',
        menu: 'عقد العمل',
        exporterFileName: 'exportacion_employmentContract',
        list: {
          menu: 'عقد العمل',
          title: 'عقد العمل',
        },
        create: {
          success: 'عقد العمل  guardado con éxito',
        },
        update: {
          success: 'عقد العمل  guardado con éxito',
        },
        destroy: {
          success: 'عقد العمل  eliminado con éxito',
        },
        destroyAll: {
          success: 'عقد العمل (s) eliminado con éxito',
        },
        edit: {
          title: 'Editar عقد العمل ',
        },
        fields: {
          id: 'Id',
          'contractDateRange': 'تاريخ إبرام العقد',
          'contractDate': 'تاريخ إبرام العقد',
          'companyRepresentative': 'ممثل الشركة',
          'secondParty': 'الطرف الثاني',
          'nationality': 'الجنسية',
          'passportNumber': 'رقم جواز السفر',
          'passportIssueDateRange': 'تاريخ صدور جواز السفر',
          'passportIssueDate': 'تاريخ صدور جواز السفر',
          'email': 'البريد الإلكتروني',
          'jobTitle': 'المسمى الوظيفي',
          'dailyWorkingHoursRange': 'ساعات العمل اليومية',
          'dailyWorkingHours': 'ساعات العمل اليومية',
          'weeklyWorkingHoursRange': 'ساعات العمل الأسبوعية',
          'weeklyWorkingHours': 'ساعات العمل الأسبوعية',
          'weekEndDay': 'يوم الراحة',
          'workStartDateRange': 'تاريخ بدء العمل',
          'workStartDate': 'تاريخ بدء العمل',
          'employeeName': 'اسم العامل',
          'positionName': 'المسمى الوظيفي',
          'basicSalaryRange': 'ألراتب الأساسي',
          'basicSalary': 'ألراتب الأساسي',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'companyRepresentative': 'ممثل الشركة في العقد',
          'secondParty': 'الطرف الثاني من العقد',
          'nationality': 'الجنسية',
          'passportNumber': 'رقم جواز السفر',
          'email': 'البريد الإلكتروني',
          'jobTitle': 'المسمى الوظيفي',
          'dailyWorkingHours': 'عدد ساعات العمل الفعلية اليومية',
          'weeklyWorkingHours': 'عدد ساعات العمل الفعلية بالأسبوع',
          'weekEndDay': 'يوم الراحة',
          'employeeName': 'اسم العامل/المتعاقد معه',
          'positionName': 'المسمى الوظيفي',
          'basicSalary': 'الراتب الأساسي',
        },
        hints: {

        },
        new: {
          title: 'Nuevo عقد العمل ',
        },
        view: {
          title: 'Ver عقد العمل ',
        },
        importer: {
          title: 'Importar عقد العمل',
          fileName: 'employmentContract_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    connectionLevel: {
        name: 'connectionLevel',
        label: 'ConnectionLevels',
        menu: 'ConnectionLevels',
        exporterFileName: 'exportacion_connectionLevel',
        list: {
          menu: 'ConnectionLevels',
          title: 'ConnectionLevels',
        },
        create: {
          success: 'مستوى الاتصال guardado con éxito',
        },
        update: {
          success: 'مستوى الاتصال guardado con éxito',
        },
        destroy: {
          success: 'مستوى الاتصال eliminado con éxito',
        },
        destroyAll: {
          success: 'مستوى الاتصال(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar مستوى الاتصال',
        },
        fields: {
          id: 'Id',
          'external': 'الخارجي',
          'internal': 'الداخلي',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'external': 'حدد مستوى الاتصال بكلمة',
          'internal': 'حدد مستوى الاتصال بكلمة',
        },
        hints: {

        },
        new: {
          title: 'Nuevo مستوى الاتصال',
        },
        view: {
          title: 'Ver مستوى الاتصال',
        },
        importer: {
          title: 'Importar ConnectionLevels',
          fileName: 'connectionLevel_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    commonComitees: {
        name: 'commonComitees',
        label: 'CommonComitees',
        menu: 'CommonComitees',
        exporterFileName: 'exportacion_commonComitees',
        list: {
          menu: 'CommonComitees',
          title: 'CommonComitees',
        },
        create: {
          success: 'اللجان المشتركة guardado con éxito',
        },
        update: {
          success: 'اللجان المشتركة guardado con éxito',
        },
        destroy: {
          success: 'اللجان المشتركة eliminado con éxito',
        },
        destroyAll: {
          success: 'اللجان المشتركة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar اللجان المشتركة',
        },
        fields: {
          id: 'Id',
          'addedCommittee': 'اللجان المضافة',
          'menus': 'Menus',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'menus': {
            ': لجنة المبايعات': ': لجنة المبايعات',
            'لجنة المسافرات': 'لجنة المسافرات',
            'لجنة المصالحات': 'لجنة المصالحات',
            'لجنة اللجان': 'لجنة اللجان',
          },
        },
        placeholders: {
          'addedCommittee': 'أضف اسم اللجنة هنا',
        },
        hints: {

        },
        new: {
          title: 'Nuevo اللجان المشتركة',
        },
        view: {
          title: 'Ver اللجان المشتركة',
        },
        importer: {
          title: 'Importar CommonComitees',
          fileName: 'commonComitees_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    jobRequirments: {
        name: 'jobRequirments',
        label: 'JobRequirments',
        menu: 'JobRequirments',
        exporterFileName: 'exportacion_jobRequirments',
        list: {
          menu: 'JobRequirments',
          title: 'JobRequirments',
        },
        create: {
          success: 'متطلبات الوظيفة guardado con éxito',
        },
        update: {
          success: 'متطلبات الوظيفة guardado con éxito',
        },
        destroy: {
          success: 'متطلبات الوظيفة eliminado con éxito',
        },
        destroyAll: {
          success: 'متطلبات الوظيفة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar متطلبات الوظيفة',
        },
        fields: {
          id: 'Id',
          'tactLevel': 'مستوى اللباقة',
          'experienceYearsRange': 'سنوات الخبرة',
          'experienceYears': 'سنوات الخبرة',
          'minKPI': 'الحد الأدنى لمعايير الأداء المتوقع',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo متطلبات الوظيفة',
        },
        view: {
          title: 'Ver متطلبات الوظيفة',
        },
        importer: {
          title: 'Importar JobRequirments',
          fileName: 'jobRequirments_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    jobPath: {
        name: 'jobPath',
        label: 'JobPaths',
        menu: 'JobPaths',
        exporterFileName: 'exportacion_jobPath',
        list: {
          menu: 'JobPaths',
          title: 'JobPaths',
        },
        create: {
          success: 'المسار الوظيفي guardado con éxito',
        },
        update: {
          success: 'المسار الوظيفي guardado con éxito',
        },
        destroy: {
          success: 'المسار الوظيفي eliminado con éxito',
        },
        destroyAll: {
          success: 'المسار الوظيفي(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar المسار الوظيفي',
        },
        fields: {
          id: 'Id',
          'jobName': 'الوظيفة',
          'promotionIndicators': 'مؤشرات الترقي',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo المسار الوظيفي',
        },
        view: {
          title: 'Ver المسار الوظيفي',
        },
        importer: {
          title: 'Importar JobPaths',
          fileName: 'jobPath_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    tasksDuties: {
        name: 'tasksDuties',
        label: 'TasksDuties',
        menu: 'TasksDuties',
        exporterFileName: 'exportacion_tasksDuties',
        list: {
          menu: 'TasksDuties',
          title: 'TasksDuties',
        },
        create: {
          success: 'TasksDuties guardado con éxito',
        },
        update: {
          success: 'TasksDuties guardado con éxito',
        },
        destroy: {
          success: 'TasksDuties eliminado con éxito',
        },
        destroyAll: {
          success: 'TasksDuties(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar TasksDuties',
        },
        fields: {
          id: 'Id',
          'tasksDuties': 'المهام و الواجبات',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo TasksDuties',
        },
        view: {
          title: 'Ver TasksDuties',
        },
        importer: {
          title: 'Importar TasksDuties',
          fileName: 'tasksDuties_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    administrativeFinancialPowers: {
        name: 'administrativeFinancialPowers',
        label: 'AdministrativeFinancialPowers',
        menu: 'AdministrativeFinancialPowers',
        exporterFileName: 'exportacion_administrativeFinancialPowers',
        list: {
          menu: 'AdministrativeFinancialPowers',
          title: 'AdministrativeFinancialPowers',
        },
        create: {
          success: 'الصلاحيات الإدارية و المالية guardado con éxito',
        },
        update: {
          success: 'الصلاحيات الإدارية و المالية guardado con éxito',
        },
        destroy: {
          success: 'الصلاحيات الإدارية و المالية eliminado con éxito',
        },
        destroyAll: {
          success: 'الصلاحيات الإدارية و المالية(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الصلاحيات الإدارية و المالية',
        },
        fields: {
          id: 'Id',
          'administrativeFinancialPowers': 'الصلاحيات الإدارية و المالية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo الصلاحيات الإدارية و المالية',
        },
        view: {
          title: 'Ver الصلاحيات الإدارية و المالية',
        },
        importer: {
          title: 'Importar AdministrativeFinancialPowers',
          fileName: 'administrativeFinancialPowers_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    cardInformation: {
        name: 'cardInformation',
        label: 'CardInformations',
        menu: 'CardInformations',
        exporterFileName: 'exportacion_cardInformation',
        list: {
          menu: 'CardInformations',
          title: 'CardInformations',
        },
        create: {
          success: 'بيانات البطاقة guardado con éxito',
        },
        update: {
          success: 'بيانات البطاقة guardado con éxito',
        },
        destroy: {
          success: 'بيانات البطاقة eliminado con éxito',
        },
        destroyAll: {
          success: 'بيانات البطاقة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar بيانات البطاقة',
        },
        fields: {
          id: 'Id',
          'version': 'الإصدار',
          'dateRange': 'التاريخ',
          'date': 'التاريخ',
          'generalManager': 'المدير العام',
          'hRManager': 'مدير الموارد البشرية',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo بيانات البطاقة',
        },
        view: {
          title: 'Ver بيانات البطاقة',
        },
        importer: {
          title: 'Importar CardInformations',
          fileName: 'cardInformation_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    tellProblem: {
        name: 'tellProblem',
        label: 'TellProblems',
        menu: 'TellProblems',
        exporterFileName: 'exportacion_tellProblem',
        list: {
          menu: 'TellProblems',
          title: 'TellProblems',
        },
        create: {
          success: 'الإبلاغ عن مشكلة guardado con éxito',
        },
        update: {
          success: 'الإبلاغ عن مشكلة guardado con éxito',
        },
        destroy: {
          success: 'الإبلاغ عن مشكلة eliminado con éxito',
        },
        destroyAll: {
          success: 'الإبلاغ عن مشكلة(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الإبلاغ عن مشكلة',
        },
        fields: {
          id: 'Id',
          'problemDescription': 'شرح محتوى المشكلة',
          'problemDateRange': 'تاريخ الحدوث',
          'problemDate': 'تاريخ الحدوث',
          'problemCauses': 'الأسباب المحتملة',
          'problemSolutions': 'الحلول المقترحة',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'problemDescription': 'شرح المشكلة هنا',
          'problemCauses': 'الأسباب المحتملة',
          'problemSolutions': 'الحلول المقترحة',
        },
        hints: {

        },
        new: {
          title: 'Nuevo الإبلاغ عن مشكلة',
        },
        view: {
          title: 'Ver الإبلاغ عن مشكلة',
        },
        importer: {
          title: 'Importar TellProblems',
          fileName: 'tellProblem_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    departments: {
        name: 'departments',
        label: 'Departments',
        menu: 'Departments',
        exporterFileName: 'exportacion_departments',
        list: {
          menu: 'Departments',
          title: 'Departments',
        },
        create: {
          success: 'الأقسام guardado con éxito',
        },
        update: {
          success: 'الأقسام guardado con éxito',
        },
        destroy: {
          success: 'الأقسام eliminado con éxito',
        },
        destroyAll: {
          success: 'الأقسام(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar الأقسام',
        },
        fields: {
          id: 'Id',
          'departments': 'ألأقسام',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'departments': 'القسم',
        },
        hints: {

        },
        new: {
          title: 'Nuevo الأقسام',
        },
        view: {
          title: 'Ver الأقسام',
        },
        importer: {
          title: 'Importar Departments',
          fileName: 'departments_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Color primario',
      secondaryColor: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      amber: 'Ámbar',
      blue: 'Azul',
      cyan: 'Cian',
      deep_orange: 'Naranja intenso',
      deep_purple: 'Morado oscuro',
      green: 'Verde',
      indigo: 'Índigo',
      light_blue: 'Azul claro',
      light_green: 'Verde claro',
      lime: 'Lima',
      orange: 'Naranja',
      pink: 'Rosado',
      purple: 'Púrpura',
      red: 'Rojo',
      teal: 'Verde azulado',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue_grey: 'Gris azulado',
      brown: 'Marrón',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/src/app/dashboard/components/dashboard.component.html',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },
  paginator: {
    itemsPerPageLabel: 'Elementos por página:',
    nextPageLabel: 'Siguiente página',
    previousPageLabel: 'Pagina anterior',
    firstPageLabel: 'Primera página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },
  datetime: {
    upSecondLabel: 'Añadir un segundo',
    downSecondLabel: 'Menos un segundo',
    upMinuteLabel: 'Añadir un minuto',
    downMinuteLabel: 'Menos un minuto',
    upHourLabel: 'Agregar una hora',
    downHourLabel: 'Menos una hora',
    prevMonthLabel: 'Mes anterior',
    nextMonthLabel: 'Próximo mes',
    prevYearLabel: 'Año anterior',
    nextYearLabel: 'El próximo año',
    prevMultiYearLabel: '21 años anteriores',
    nextMultiYearLabel: 'Próximos 21 años',
    switchToMonthViewLabel: 'Cambiar a vista mensual',
    switchToMultiYearViewLabel: 'Elige mes y año',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Conjunto',
    rangeFromLabel: 'De',
    rangeToLabel: 'A',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },
  table: {
    noData: 'Sin datos',
    loading: 'Cargando...',
  },
  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
