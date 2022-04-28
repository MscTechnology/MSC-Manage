const tr = {
    translation: {
        homepage: {
            personelbutton: 'Personel',
            adminbutton: 'Yönetici',
        },
        login: {
            adminlogin:{
                title: 'Yönetici Girişi',
                username: 'Kullanıcı Adı',
                password: 'Şifre',
                login: 'Giriş Yap',
                wrong: 'Kullanıcı Adı veya Şifre yanlış',
                signedin: 'Giriş Yapıldı',
            },
            personellogin:{
                title: 'Personel Girişi',
                username: 'Kullanıcı Adı',
                password: 'Şifre',
                login: 'Giriş Yap',
                wrong: 'Kullanıcı adı, şifre yanlış veya hesabınız aktif değil',
                signedin: 'Giriş Yapıldı',
            },
        },
        adminpage: {
            title: 'Yönetim Paneli',
            buttons:{
                allpersonel: 'Personeller',
                allpersonelsub: 'Kayıtlı Personeller',
                movements: 'Giriş-Çıkışlar',
                movementsub: 'Personel Giriş-Çıkışları',
                addpersonel: 'Personel Ekle',
                addpersonelsub: 'Yeni Personel Ekle',
            }
        },
        allpersonelpage:{
            title: 'Personeller',
            active: 'Aktif',
            deactive: 'Pasif',
            addnewbutton: 'Yeni Personel Ekle',
        },
        movements: {
            title: 'Personel Giriş-Çıkışları',
            table: {
                name: 'İsim',
                surname: 'Soyisim',
                transactiondate: 'Giriş Tarihi',
                day: 'Gün',
                entrytime: 'Giriş Saati',
                exittime: 'Çıkış Saati',
            },
            notyet: 'Henüz Çıkmamış',
        },
        addpersonelpage:{
            title: 'Personel Ekle',
            name: 'İsim*',
            surname: 'Soyisim*',
            username: 'Kullanıcı Adı*',
            password: 'Şifre*',
            usertype: 'Kullanıcı Tipi*',
            submitbutton: 'Ekle',
        },
        personeldetail: {
            title: 'Personel Detayları',
            informations: {
                id: 'ID',
                name: 'İsim',
                surname: 'Soyisim',
                username: 'Kullanıcı Adı',
                password: 'Şifre',
                phone: 'Telefon',
                email: 'Email',
                tc: 'TC Kimlik No',
                school: 'Okul',
                adress: 'Adres',
                city: 'Şehir',
                district: 'İlçe',
                status: 'Durum',
            },
            active: 'Aktif',
            deactive: 'Pasif',
            viewbutton: 'Personel Giriş-Çıkışlarını Görüntüle',
        },
        personelPage:{
            title:'Hoşgeldin',
            buttons:{
                movementsTable:'Giriş-Çıkış Tablosu',
                update:'Bilgilerini Güncelle',
                documents:'Belgeler'
            }
        },
        personelMovements:{
            title:'Giriş-Çıkış Bilgileri',
            table:{
                date:'İşlem Tarihi',
                day:'Gün',
                entrytime:'Giriş Saati',
                exittime:'Çıkış Saati',
            },
            loginlogout:'Giriş / Çıkış yap',
            modal:{
                title:'Emin Misiniz?',
                description1:'Giriş yapacağınız tarih :',
                description2:'Çıkış yapacağınız tarih :',
                loginbtn:'Giriş Yap',
                logoutbtn:'Çıkış Yap',
                closebtn:'Kapat',
            },
            toast:{
                login:'Giriş Yapıldı',
                logout:'Çıkış Yapıldı',
            }
        },
        updateInformations:{
            title:'Bilgilerini Güncelle',
            button:"Kaydet",
            label:{
                name:'İsim',
                surname:'Soyisim',
                username:'Kullanıcı Adı',
                phone:'Telefon Numarası',
                email:'Email',
                password:'Şifre',
                school:'Okul',
                address:'Adres',
                city:'Şehir',
                district:'İlçe',
                tc:"TC Kimlik No",
            },
            success: 'Bilgileriniz Güncellendi',
        },
        uploadDocument:{
            title:'Belge Yükle',
            button:"Yükle",
            label:{
                documentType:'Belge Türü',
                choose:'Belgeni seç',
            }
        },
        PersonalMovementsByName:{
            title:'Giriş-Çıkış Bilgileri',
        },
        
    }
}

export default tr;
