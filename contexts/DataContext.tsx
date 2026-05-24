"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Veri tipleri
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: number;
  distance: string;
  status: string;
  description?: string;
  image?: string;
  photos?: string[];
  route?: string[];
  highlights?: string[];
  recommendations?: string[];
  duration?: string;
}

interface GalleryImage {
  id: number;
  title: string;
  url: string;
  category: string;
}

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: string;
}

interface Member {
  id: number;
  name: string;
  surname: string;
  age?: number;
  city?: string;
  bloodType?: string;
  bike?: string;
  bikeModel?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  telegram?: string;
  photo?: string;
  coverVideo?: string;
  coverImage?: string;
  gallery?: string[];
  bio?: string;
  joinDate?: string;
  totalEvents?: number;
  totalKm?: number;
}

interface AboutContent {
  description: string;
  mission: string;
  totalMembers: number;
  annualEvents: number;
  totalKm: number;
}

interface SiteSettings {
  siteName: string;
  siteTagline: string;
  contactEmail: string;
  instagram: string;
  phone: string;
}

interface DataContextType {
  events: Event[];
  galleryImages: GalleryImage[];
  messages: Message[];
  members: Member[];
  aboutContent: AboutContent;
  siteSettings: SiteSettings;
  addEvent: (event: Event) => void;
  updateEvent: (id: number, event: Event) => void;
  deleteEvent: (id: number) => void;
  addGalleryImage: (image: GalleryImage) => void;
  updateGalleryImage: (id: number, image: GalleryImage) => void;
  deleteGalleryImage: (id: number) => void;
  addMessage: (message: Message) => void;
  deleteMessage: (id: number) => void;
  markMessageAsRead: (id: number) => void;
  addMember: (member: Member) => void;
  updateMember: (id: number, member: Member) => void;
  deleteMember: (id: number) => void;
  updateAboutContent: (content: AboutContent) => void;
  updateSiteSettings: (settings: SiteSettings) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Başlangıç verileri
const initialEvents: Event[] = [
  {
    id: 1,
    title: "GECE SÜRÜŞÜ VOL.3",
    date: "15 Eylül 2026",
    location: "Şehir Merkezi - Boğaz Köprüsü",
    participants: 32,
    distance: "85 km",
    status: "completed",
    duration: "3 saat",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
    description: "Şehrin ışıkları altında unutulmaz bir gece sürüşü gerçekleştirdik. Boğaz Köprüsü'nden geçerek şehrin en güzel noktalarını keşfettik.",
    route: [
      "Başlangıç: 68 Riders Merkez",
      "1. Durak: Şehir Meydanı (15 dk mola)",
      "2. Durak: Boğaz Köprüsü (fotoğraf molası)",
      "3. Durak: Sahil Yolu",
      "Bitiş: 68 Riders Merkez"
    ],
    highlights: [
      "Şehir ışıkları altında muhteşem manzara",
      "32 rider ile rekor katılım",
      "Profesyonel fotoğraf çekimi",
      "Güvenli ve organize sürüş"
    ],
    recommendations: [
      "Gece sürüşü için reflektörlü kıyafet giyin",
      "Boğaz Köprüsü'nde fotoğraf çekmek için ekstra batarya getirin",
      "Şehir Meydanı'nda sıcak içecek molası verin",
      "Grup halinde sürüş kurallarına dikkat edin"
    ],
    photos: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-d5b6b6ff5b3c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "PİST GÜNÜ VOL.2",
    date: "3 Ağustos 2026",
    location: "Grand Prix Pisti",
    participants: 18,
    distance: "120 km",
    status: "completed",
    duration: "6 saat",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
    description: "Profesyonel eğitmenler eşliğinde pist sürüş teknikleri öğrendik. Güvenli viraj alma ve hız kontrolü eğitimi aldık.",
    route: [
      "Başlangıç: Grand Prix Pisti Giriş",
      "Teorik Eğitim: 1 saat",
      "Pratik Sürüş: 4 saat",
      "Yarış Simülasyonu: 1 saat"
    ],
    highlights: [
      "Profesyonel eğitmenlerle çalışma",
      "Pist sürüş teknikleri",
      "Güvenli viraj alma",
      "Hız kontrolü eğitimi"
    ],
    recommendations: [
      "Tam koruyucu ekipman zorunludur (deri, eldiven, bot)",
      "Kask standartları kontrol edilecektir",
      "Kahvaltı öncesi gelmeniz önerilir",
      "Ekstra yakıt getirin, pistte dolum yok"
    ],
    photos: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "SAHİL YOLU TURU",
    date: "20 Temmuz 2026",
    location: "Sahil Yolu - Kıyı Kasabası",
    participants: 45,
    distance: "320 km",
    status: "completed",
    duration: "8 saat",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
    description: "Muhteşem manzaralar eşliğinde 320 km'lik sahil turu. Deniz kenarında unutulmaz anılar biriktirdik.",
    route: [
      "Başlangıç: 68 Riders Merkez (07:00)",
      "1. Durak: Sahil Kasabası (kahvaltı molası)",
      "2. Durak: Deniz Feneri (fotoğraf)",
      "3. Durak: Balıkçı Köyü (öğle yemeği)",
      "4. Durak: Kıyı Kasabası",
      "Dönüş: 68 Riders Merkez (19:00)"
    ],
    highlights: [
      "320 km muhteşem sahil yolu",
      "45 rider ile en büyük konvoy",
      "Deniz manzaralı molalar",
      "Yerel lezzetler"
    ],
    recommendations: [
      "Güneş kremi ve güneş gözlüğü mutlaka alın",
      "Deniz Feneri'nde gün batımı fotoğrafları harika",
      "Balıkçı Köyü'nde taze balık yemeyi deneyin",
      "Sahil yolunda rüzgar olabilir, dikkatli sürün"
    ],
    photos: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-d5b6b6ff5b3c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "DAĞ YOLU MACERASI",
    date: "5 Haziran 2026",
    location: "Dağ Geçidi - Yüksek Plato",
    participants: 28,
    distance: "250 km",
    status: "completed",
    duration: "10 saat",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop",
    description: "Zorlu dağ yollarında adrenalin dolu bir macera yaşadık. 2500 metre yüksekliğe çıktık.",
    route: [
      "Başlangıç: 68 Riders Merkez (06:00)",
      "1. Durak: Dağ Eteği Köyü",
      "2. Durak: Yüksek Geçit (2000m)",
      "3. Durak: Plato (2500m - öğle yemeği)",
      "4. Durak: Dağ Gölü",
      "Dönüş: 68 Riders Merkez (20:00)"
    ],
    highlights: [
      "2500 metre yükseklik",
      "Zorlu virajlar ve teknik yollar",
      "Muhteşem dağ manzaraları",
      "Ekip çalışması ve dayanışma"
    ],
    recommendations: [
      "Sıcak tutan kıyafetler alın, yüksekte soğuk olur",
      "Yükseklik tutması için ilaç bulundurun",
      "Dağ Gölü'nde mola verip manzaranın tadını çıkarın",
      "Teknik virajlar için deneyimli sürücüler önerilir"
    ],
    photos: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop"
    ]
  },
];

const initialGalleryImages: GalleryImage[] = [
  { id: 1, title: "Gece Sürüşü", url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop", category: "events" },
  { id: 2, title: "Pist Günü", url: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop", category: "events" },
  { id: 3, title: "Sahil Turu", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop", category: "tours" },
  { id: 4, title: "Grup Fotoğrafı", url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop", category: "events" },
  { id: 5, title: "Şehir Turu", url: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2000&auto=format&fit=crop", category: "tours" },
  { id: 6, title: "Dağ Yolu", url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop", category: "tours" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    phone: "+90 555 123 4567",
    message: "Kulübe katılmak istiyorum",
    date: "20.05.2026",
    status: "unread",
  },
  {
    id: 2,
    name: "Mehmet Demir",
    email: "mehmet@example.com",
    phone: "+90 555 987 6543",
    message: "Etkinlikler hakkında bilgi almak istiyorum",
    date: "21.05.2026",
    status: "read",
  },
];

const initialMembers: Member[] = [
  {
    id: 1,
    name: "Ali",
    surname: "Yılmaz",
    age: 28,
    city: "İstanbul",
    bloodType: "A+",
    bike: "Yamaha",
    bikeModel: "R6",
    instagram: "ali_speedy",
    tiktok: "ali_speedy",
    photo: "https://ui-avatars.com/api/?name=Ali+Yilmaz&size=600&background=ff0033&color=fff&bold=true",
    coverImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
    bio: "Hız tutkunu, yol aşığı. 2020'den beri 68 Riders ailesinin bir parçasıyım. Her yolculuk yeni bir macera!",
    joinDate: "Ocak 2020",
    totalEvents: 24,
    totalKm: 8500,
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-d5b6b6ff5b3c?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Mehmet",
    surname: "Kaya",
    age: 32,
    city: "Ankara",
    bloodType: "0+",
    bike: "Honda",
    bikeModel: "CBR1000RR",
    instagram: "mehmet_thunder",
    twitter: "mehmet_thunder",
    photo: "https://ui-avatars.com/api/?name=Mehmet+Kaya&size=600&background=ff0033&color=fff&bold=true",
    coverImage: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2000&auto=format&fit=crop",
    bio: "Pist tutkunu, adrenalin bağımlısı. Güvenli sürüş her şeyden önemli!",
    joinDate: "Mart 2019",
    totalEvents: 31,
    totalKm: 12000,
    gallery: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Ayşe",
    surname: "Demir",
    age: 25,
    city: "İzmir",
    bloodType: "B+",
    bike: "Kawasaki",
    bikeModel: "Ninja 650",
    instagram: "ayse_phoenix",
    tiktok: "ayse_phoenix",
    telegram: "ayse_phoenix",
    photo: "https://ui-avatars.com/api/?name=Ayse+Demir&size=600&background=ff0033&color=fff&bold=true",
    coverImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop",
    bio: "Özgürlük iki tekerlekte! Kadın riderlar olarak yolları fethediyoruz 💪",
    joinDate: "Haziran 2021",
    totalEvents: 18,
    totalKm: 6200,
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547549082-6bc09f2b4efb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop"
    ]
  },
];

const initialAboutContent: AboutContent = {
  description: "68 Riders, tutkulu motosiklet severlerin bir araya gelerek oluşturduğu bir kardeşliktir. Sadece bir kulüp değil, bir yaşam tarzıyız.",
  mission: "Motosiklet tutkusunu paylaşan insanları bir araya getirmek, güvenli sürüş kültürünü yaymak ve unutulmaz anılar biriktirmek.",
  totalMembers: 68,
  annualEvents: 12,
  totalKm: 1000,
};

const initialSiteSettings: SiteSettings = {
  siteName: "68 RIDERS",
  siteTagline: "Ride Beyond Limits",
  contactEmail: "68Riders@protonmail.com",
  instagram: "@68_riders",
  phone: "+90 5XX XXX XX XX",
};

export function DataProvider({ children }: { children: ReactNode }) {
  // LocalStorage'dan veri yükle
  const [events, setEvents] = useState<Event[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("events");
      return saved ? JSON.parse(saved) : initialEvents;
    }
    return initialEvents;
  });

  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("galleryImages");
      return saved ? JSON.parse(saved) : initialGalleryImages;
    }
    return initialGalleryImages;
  });

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("messages");
      return saved ? JSON.parse(saved) : initialMessages;
    }
    return initialMessages;
  });

  const [members, setMembers] = useState<Member[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("members");
      return saved ? JSON.parse(saved) : initialMembers;
    }
    return initialMembers;
  });

  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aboutContent");
      return saved ? JSON.parse(saved) : initialAboutContent;
    }
    return initialAboutContent;
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("siteSettings");
      return saved ? JSON.parse(saved) : initialSiteSettings;
    }
    return initialSiteSettings;
  });

  // LocalStorage'a kaydet
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("galleryImages", JSON.stringify(galleryImages));
    }
  }, [galleryImages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("members", JSON.stringify(members));
    }
  }, [members]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aboutContent", JSON.stringify(aboutContent));
    }
  }, [aboutContent]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("siteSettings", JSON.stringify(siteSettings));
    }
  }, [siteSettings]);

  // Event fonksiyonları
  const addEvent = (event: Event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const updateEvent = (id: number, updatedEvent: Event) => {
    setEvents(events.map((e) => (e.id === id ? { ...updatedEvent, id } : e)));
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  // Gallery fonksiyonları
  const addGalleryImage = (image: GalleryImage) => {
    setGalleryImages([...galleryImages, { ...image, id: Date.now() }]);
  };

  const updateGalleryImage = (id: number, updatedImage: GalleryImage) => {
    setGalleryImages(galleryImages.map((img) => (img.id === id ? { ...updatedImage, id } : img)));
  };

  const deleteGalleryImage = (id: number) => {
    setGalleryImages(galleryImages.filter((img) => img.id !== id));
  };

  // Message fonksiyonları
  const addMessage = (message: Message) => {
    setMessages([...messages, { ...message, id: Date.now() }]);
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  const markMessageAsRead = (id: number) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: "read" } : m)));
  };

  // Member fonksiyonları
  const addMember = (member: Member) => {
    setMembers([...members, { ...member, id: Date.now() }]);
  };

  const updateMember = (id: number, updatedMember: Member) => {
    setMembers(members.map((m) => (m.id === id ? { ...updatedMember, id } : m)));
  };

  const deleteMember = (id: number) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  // About ve Settings fonksiyonları
  const updateAboutContent = (content: AboutContent) => {
    setAboutContent(content);
  };

  const updateSiteSettings = (settings: SiteSettings) => {
    setSiteSettings(settings);
  };

  return (
    <DataContext.Provider
      value={{
        events,
        galleryImages,
        messages,
        members,
        aboutContent,
        siteSettings,
        addEvent,
        updateEvent,
        deleteEvent,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        addMessage,
        deleteMessage,
        markMessageAsRead,
        addMember,
        updateMember,
        deleteMember,
        updateAboutContent,
        updateSiteSettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
