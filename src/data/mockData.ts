import { Collection, MemoryItem, AudioMessage } from '../types';

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'japan-2026',
    title: 'Voyage au Japon',
    dateRange: '2 – 10 Janv. 2026',
    memoryCount: 50,
    contributorCount: 8,
    themeColor: '#ffd4cf', // Pêche poudrée
    themeName: 'Pêche poudrée',
    location: 'Kyoto & Tokyo, Japon',
    isInstantAccess: true,
    moderationEnabled: true,
    code: 'japan26',
    qrUrl: 'guestlens.app/c/japan-trip-2026',
    coverPhotos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPOp8Wtq50_SzMtLtD6qATKsEmlg6M9Z4zhvwKXwAORwfvMOXx9P4HfAcJlc5gOr-NnO2jRSG_XLH4Q4p-AMeg7J_hjvr2f0sb-z1WOjZHSE9uyDKGT7u3-KJ8m6OMCr_SFIame5DDkmQkUEeyBNcHRU_h72J6YuYiRx5x9N1zgVG6Gv8cnaT3WPNL5wvNDX6tiblIJCnR7ZpqdBMtbKNQtZX4d-G_N-nSnKbNMfV9owvJ9wxBxnAAUw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6-aFrVTi0PLz9wkJCkW0SUgzWEgxMCDfMJbvTxq1DZNKWQty_LH2187r23e1VNcrNST7aYJVDUD7ef7tCBQbgFRYq_zb4VAfVaOQGkC7P9Px-DOfB3n-I-RIifshbrgA8YIkvoL-Ubx7VUYAerFo3uEb6tpYyi9Bchg5WXl2fzF6GIAuBc71bMCw9fXMWWCYK-1ee6Ki-TNKWUCs3X8KT_GlljRBo5CL8DeM0bpYLLADYeNFfKv_OSA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAszk1QBXpUeUykX835qbsZj-BozMrDL8Z_f_i6a1_Zxj6sf__3ELhrz7aW6FCVg3NK1x1sxTqH76J-vAvsMtXNCWy29njmssbDKda74G_3G_HE3Y2oB-NG01PLDepUONWt4peyZTEgQpFiZfhmL5ltMqI85eDAKHEQdRexefwnMlIYIymtYnnbrfCHXHnqJqA2n1jSI9PwOtlNmrby6b9JauJkA-CMM6vpq_LeJ7sD8bpmdi9mdmywMA'
    ],
    contributors: [
      {
        id: 'c1',
        name: 'Camille M.',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUn6tNNPj5ltbcn2yhW8kMt_3x3Pp1qLnQb1PmPrqus9IUnrwGPNVEi4_gFF88YZ6FqY3L_FUMYVS8n1a7R8-E2lHOBAXEI0q1QPNZZJeMa1xCmFW9Dx0reoDq7mN4bAZpDFOqxQ7Ycx5Q8Uh9xYT6J9Lh3X9GiP-OYXP9v43YAQ2TJLbvKqcRfRhcADVsE8dFdklG5Ak2-IFAHVare5W7VSuwzyiu802Udh1jBxcYYvkCqBlFoeQnTA'
      },
      {
        id: 'c2',
        name: 'Maya L.',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHl_NLXIV_OX38qUfgPKbSOlqjZzeJvl6WVvOBnTUWmwKEaFCrA2FFMot80IiXLEODZ0fK-Lz0Kh8mFflaFgGd-dtXCWxIF3FF9RN8ulCoucf5grQs8g25I7Kq1KoPV-nDtvChPivfZzhJ1DBz79unsu5ygLt85Tcd5qdwUED3xAXTW8rCmW3En7Ojid62IAugfHkckSTT25FbJ_Gwucs53YZqXxAw7FeKp3LES3wQKTSKDhlHVSzSyA'
      },
      {
        id: 'c3',
        name: 'Léo B.',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArpkhF9B5jall0BkgzHwS1U13sDlIDtbHV_YrIELbAcNhax1GOoU3FnxZ0zSDEqdoYMu-BeGlmjVuHTiXa94vZPxInpEt2cJdrjQKBgb_s0cEDCLsPYmolgiP9DebENjcWk_s9-ukIS_7weFC1plf_xsvEFrAawA0mNH4optVs-Srlp3IPtsQCCtDXfYuw2ovJ_98sxTqBVJpFriKzWWt8Vb09n-GyeKKxu38sKQkQYZnnBvkiu5Kwng'
      },
      {
        id: 'c4',
        name: 'Kenji & Sarah',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmaDE0LEkh06_i2YFWCLeLVqEFLki5rc4fjnf4e1yzpO4By97D1T0d61xzZdpzMstcIF04c-Si9VZKZxHudRUVFbrovuCzL-0UTJ47K7bszrk36rsfRFHESHRF-f27oNo-ennfayKPh3Qt2hoaWLbvxvt-Pe0PSSU3dTt5T7iYmV5SvGH8YDDncBGRLEtuwOHyWk2WU7unGcIXGI32-3CTE7Gt5U49rkQpsWykGBLhzv7cuZmRhyeU5g'
      }
    ]
  },
  {
    id: 'detty-december',
    title: 'Soirée Detty December',
    dateRange: '20 Déc. 2025',
    memoryCount: 102,
    contributorCount: 19,
    themeColor: '#d9e2ff', // Pervenche
    themeName: 'Pervenche',
    location: 'Rooftop Lounge, Paris',
    isInstantAccess: true,
    moderationEnabled: false,
    code: 'detty25',
    qrUrl: 'guestlens.app/c/detty-dec-2025',
    coverPhotos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMLgfB2Ao-RYYVldO-pVD1VoYKlUAXTWafZ5VYEn7kG8FpQGtR4xdKDPA10rgraXXC2p4VKp4Q98S9IwGZNat5ltFVY5R58YYG7a5EPeYnsJm7hSmD611579caOmteHMEYazVs4BDU_G7CnU8xlfEZboNWqglJgGIXYfs_F3OmgwumrsQyJ5g2D33Vvc0961kUoSov-dwuEt8YIsCkhPztFpo1BA0lUyneob53Kpg6SS-14LU8BWcv_w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA70w2IIBRwkHRCAYQB3b9kVkWNcMxk-I4ffrIBrPmqHK57jlnim5odG3t-9khij1-YQ_wAvJUCOR7ARNuh826R1vBIE01Gf-wgPemp8zaIla0PNKCbA8Or6kEUzLLf85jsAxuzNyNgDnfQglwuvy64dLORIhBL8h4AFbCOFiHY9A3WghqGwES4ZYEGyCPIDFO4lH0SfoAPNF9VoTen2FNrQXeZB34ROWyDDajJKVo3toTDxjTIb_NUKA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvSQC_4AlUDCMHR5bRX4y02qKrBiV7NOhRaOZx1ByQHtesmUIdRwsL74GQA88KtQIZpB0yB4ea9Z4BQ9lxSEfyKyUo7vc-yId5Jmu8JIdaWWHKwvALPOL4iYx0Lcelu3opDoerKAuAkvizUaZjM2S1Ui5txsj2Q-FkdzCjNSFMD32fCZn5dS-eVUpxCeSRIiQjkymDVPFxwoUNKEAReHnEUpsKOPQIXWKZ5a3MWCRIt_OPjEo18MmuLQ'
    ],
    contributors: [
      {
        id: 'c5',
        name: 'Thomas & Alex',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl5WBTsujaPqHQArf8xUdb0tb2NdXXNkZUVNTJj0mTPMZS-jDvdKWea4ap9lPazcw4WWYoqsBN-0ocDdLATx31WT6VaOtadczqDb-Yw4IX2hNbZleHMqsLDApEJrQt773qFMl6a7xTN6dGsPNOR8dUaHkhgP00iJ5ugsFrnmaNfam7vN5GQN6PuDBqFTjSezbd9npq1ajE7nNKMi2kBRIX75zqLEynlDZGGIFnhjLExTfF1grv0JznoQ'
      },
      {
        id: 'c6',
        name: 'Yuki Tanaka',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8091ZF1cIu5kLXTSld0RMkaAccxNI9286dSvXHNJMWRvx1LLSIJ_ZC3O9_MAcO_pkXcbPc8oHPEvBWnTtS1TwzutsLgIGGscmPxk4fV2kGod_UuIopzwrH7L3oJKTMHXDTioweEhe9iLGWfZzpK0ADd5COencvRyY2CwJWS4BOEQ7ZcpgyZRjrjO3InJtml7quPynjIAIkPDyKjL88SotRZHBMqdRkymXGXTzYjrDfi9uXZNQDDix7A'
      }
    ]
  }
];

export const JAPAN_MEMORIES: MemoryItem[] = [
  {
    id: 'mem-1',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq0plT72HibnvZhX9K7w6d4O91DvlLzt4gW6OFJqczw4jBi1bwpzJ_N7knzFtTn6TpnTIW6Vdg_bdlnlk8aCxEzWu_LaAh2UqGRk6-TH0Ndmc4xyI2rlsNO9V9lVDHlkz3bbbHM4qWyJzis92ydTTMPXY7HRJn3I48Ncug4J8mIeOR-lrreDGB7Zy9HwG7tyVuofP4AINWMQz2JA0EhJOePb-Y1lhYDRYsCa_RoaeHpod5sX8bO8DKsg',
    author: 'Camille M.',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUn6tNNPj5ltbcn2yhW8kMt_3x3Pp1qLnQb1PmPrqus9IUnrwGPNVEi4_gFF88YZ6FqY3L_FUMYVS8n1a7R8-E2lHOBAXEI0q1QPNZZJeMa1xCmFW9Dx0reoDq7mN4bAZpDFOqxQ7Ycx5Q8Uh9xYT6J9Lh3X9GiP-OYXP9v43YAQ2TJLbvKqcRfRhcADVsE8dFdklG5Ak2-IFAHVare5W7VSuwzyiu802Udh1jBxcYYvkCqBlFoeQnTA',
    timestamp: 'Il y a 15 min',
    caption: 'Ruelle de Gion illuminée sous la pluie douce nocturne 🏮✨',
    tag: 'Voyage au Japon',
    location: 'Ruelle de Gion, Kyoto',
    likes: 24,
    commentsCount: 5,
    isLiked: true
  },
  {
    id: 'mem-2',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc6-JcKeDI4uWPEcwMEd82Pz-k4codDiVXyBwGuKwKTyVbgJZMQ7MAR0sIFJaqP96ZC-fSpC1E6u1SlUV47MVMwUeL8adhcFxRkS7MBJ-XEpCN7cbZD2QX-VozhRmkRxSrHJH3UajQS5OKftFYbeLNqhcBkC2-JmI3RrOOHgZG9rlcWWwIJuvUnuXrElHArx7jPRg6er5MHncXurkcGUPjluyQY-W6ZmDP7IMHesZXnXW7r-uR3O-cyw',
    author: 'Léo B.',
    timestamp: 'Il y a 38s',
    caption: 'Nuit à Shinjuku',
    location: 'Shinjuku, Tokyo',
    likes: 31,
    commentsCount: 12,
    isLiked: false
  },
  {
    id: 'mem-3',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCizkBUhvKHzqOGldYxO47CaAsbK3M_xnyo4jAakCw9rzDf1ZEeNrOSlwSJyYFeY3kFhy6PB_R2Fr_mtvb2AsaK4eoqlZnFHC_-WSRrOoaiuX2ypM9sB5tUuWIO5OrySifDtcrckEkOfIxj40Jp1amnqRqsZ_581NmGW8TELLWaWdGM088N72LYHnrcy3d0XJtd-QzxNo-dB1UEPhVLcLLDHHtJLZQiFuu6JKNPJkhEq5MGyCXslPGAAQ',
    author: 'Julien T.',
    timestamp: 'Il y a 2 min',
    caption: 'Festin Ichiran',
    category: 'Gastronomie',
    location: 'Ramen Street, Shibuya',
    likes: 18,
    commentsCount: 4,
    isLiked: false
  },
  {
    id: 'mem-4',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbF13uOtGGL1l-F3OHkSjRxXVSqvikRKLEltDvL1MqKbvfzCZDByr1zA7PCwQbqgLEEmH1l9iCqXHw6z4I4Dznyz9ruYHNIr-Q70xoLSm5PIQENdIYOUSrSlH-bzrnoygQ03ok_7WVYZBKHRDz96rDzWDFmf8IflhASsFyBv1JBN-4k9NhendsgGP9mHpV-eL9cg1Gyb73h5Y-W65bh1Tpc53mi4cBg-IiCwk5XW9FKxPj9Neulqsgg',
    author: 'Maya L.',
    timestamp: 'Il y a 10 min',
    caption: 'Pique-nique sous les sakuras',
    location: 'Parc Ueno, Tokyo',
    likes: 42,
    commentsCount: 19,
    isLiked: true
  },
  {
    id: 'mem-5',
    collectionId: 'japan-2026',
    type: 'video',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkon33ogZ1hp3KWQLto6zDWqsUGvbQlsDSwpdlk2K50qN_yQ2IlEvbkHjwewD1fJd3MJtJQvbUyEmfhaHKpXRANLG-MT_oBQaIvIR9UvciPkf1-crfnbh_mnJCqQhHxnLCZ71B0uexZoR3Rl-S1EU6tOkLT33jf4A5rpYA4zVpTeyCxkJIisEYNBHzsr-IDVawldGPWRW8Ih3Un83ApQV5vXzSyDfvDJgkNnIZ0tlsWUWhPb_Kk8MoNw',
    author: 'Kenji & Sarah',
    timestamp: 'Il y a 25 min',
    caption: 'Balade bambouseraie',
    duration: '0:42',
    location: 'Arashiyama, Kyoto',
    likes: 29,
    commentsCount: 7,
    isLiked: false
  },
  {
    id: 'mem-6',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHB8Ux0BocJGCWjE98OCelruHVGBvC27TwjcMHBgeg1QgQyhUmoQhLBak3hh0orWZuuq1DSfyfjg3hUrXA-Ug088UWG2rhikgctUz-U0V4MtZbr9obrKgFD45Gae8u7XdwanzkOZAhR4aSdJnYORctbGaNvp9mRYsbPbft9MVjBp0GfU-IDG4-QM6xQA-bxFxxKBNlny6ROkdlcppeICP3Q5l6qu9HshGlinY1rrpHp96YW42rwEBk2A',
    author: 'Thomas & Alex',
    timestamp: 'Il y a 45 min',
    caption: 'Parc aux daims de Nara',
    location: 'Nara Koen',
    likes: 38,
    commentsCount: 8,
    isLiked: false
  },
  {
    id: 'mem-7',
    collectionId: 'japan-2026',
    type: 'photo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLWDSK9vL8vb78qbdYUtyB5UXzy-vQtJwF2vMBHLsXD0e9phYx63AFLOP-X3Zq7puJTQh1r80FC4VEux5Y0wdhCVBEhq6apUHDBcUqy1BlAge7owge5FMXqBP43T05Moe77nDAtSvf-h-oJDyq2_jJc8g0nb4vO-H_xoLWPgzggSDz1BlearPCeE58hhq6E4m4me0aAoYSQ875Q6Jw6QbQWvMVpKcKsM-gtYKni8aG2J9w1BozUyLRKA',
    author: 'Camille R.',
    timestamp: 'Il y a 1 h',
    caption: 'Vue Shibuya Sky',
    location: 'Shibuya Crossing Top',
    likes: 56,
    commentsCount: 15,
    isLiked: true
  }
];

export const FILMSTRIP_PHOTOS = [
  {
    id: 'fs-1',
    title: 'Fushimi Inari',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXDrWU1jomeKxkJ0oBg1_YMtxKDxvh2Nj7nivLXEYlMqHBBOJS0QD1GvMzOU0Lh9vMxyDuaVDLLJaYOAu0PJBGSaSNV9u_9m5Jau9SI46cuXhKKVqxzjD7XSk7jRRPKZuQeltbDFmQoJy1ruQo-PsiRcJ0xXlto1d5lo--vSWg9YwtDmOrsfeUTaH0IFKLJ-rYAxlUJoyR1k9uAyO7qtWenTMXmA8XHaRQGgU0d1xDwZk0sVPaq2v7lg'
  },
  {
    id: 'fs-2',
    title: 'Forêt de Bambous',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDochYUZjlica7jgcKqO7adLWmgpFCXkG4v9JZNb7j4ZG7RKKWWcbiQn2dbCUZ--z1VnMq2V-bs5sUxd462UPhj82FoyaS9NKAVzHJ3iXgrC1k8uC5pSa9gddEzEI2u6StPagXXZYAuS3zW30tdhY164js-f6lDlTnMCGG4TYLEiDxxd_9h17_qxfYQJBDFsBRXjvO3a16Lvx7BiY3-jyqjkW8pBO-_FZiAqs5fYJCByfAWOZVymylbbQ'
  },
  {
    id: 'fs-3',
    title: 'Shibuya Night',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB0i5k0p_bYRYmizgpUI5eKnuGr4pOWovnYradbjcHo9U1Qd649teLqbGNImFgeDBw5Fs2KHXBwr5t62SXYD-U7WlfE13XXdt4Ut3mYHuQ26834pVdzSH6hIbs10Q8l0Y5LsuwZXxjxPS2ZbjkjBEIqiIGdWJ4_JY1lk-USFDMZlQ5mL6ql4jst3Cw_4wYl79t4XMQ4YTVgn7A1nM-WGYjZUfc0WOtWshKctetK5_43X34ZMWVufw84g'
  },
  {
    id: 'fs-4',
    title: 'Gion Kyoto (Actif)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq0plT72HibnvZhX9K7w6d4O91DvlLzt4gW6OFJqczw4jBi1bwpzJ_N7knzFtTn6TpnTIW6Vdg_bdlnlk8aCxEzWu_LaAh2UqGRk6-TH0Ndmc4xyI2rlsNO9V9lVDHlkz3bbbHM4qWyJzis92ydTTMPXY7HRJn3I48Ncug4J8mIeOR-lrreDGB7Zy9HwG7tyVuofP4AINWMQz2JA0EhJOePb-Y1lhYDRYsCa_RoaeHpod5sX8bO8DKsg'
  },
  {
    id: 'fs-5',
    title: 'Cérémonie du thé',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqGX-7Fs14FRe-hCYwxlaQJ9iZq6h5LtrrpjDM8jEj0AwMGWYLu90odelaA_Wba8sgELx-RPId_AlqB8uSOpcGx5MEFasXaIGlYgx9_QbGzkCSvjR3c98pfjhmZhztZn2ojVrS2N22Nq-pPtbCkYMP4lW8fkgzjq8wgAz5gngVeQ_iIAcQiE8T4nPnAGZR6DXqJBH27FoRBQtNpfmPL-VPhr78JD1J5obMUrbrcRpx-v8PyWyS9BYuTA'
  },
  {
    id: 'fs-6',
    title: 'Mont Fuji',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5e9Ff1aERUV9o_UTCcuiMigIVS26_r1C7jl8T4a2nIxja1kf46y0eoMmFVUYKbaFQGknw1vBQzp0bYxleNDkBlV4BfhReqPxotu-xD7kGlamTe1y_3SwiW4iAJkZS1VqIJHMl49NJffGt7OgVdvzt3aXQ1w6B3RzzctOU44wfOMBjuIhgRavMW79oIp6Mkjfa6Y6MfnpXDMGLbwjxUpVKKn629Uq3NGgM_hnV1g5fOEVEbwG2WhGmXQ'
  }
];

export const SLIDESHOW_ITEMS = [
  {
    id: 'slide-1',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATHDrwxYljZj3sXvxLWnryQ3PFeCQTVdLviFsJ483CyUQUQNcUA9QrhOt9ahemxZaga9bgyW2D90P0fl-KrgR8B-f_aBiTbKmce5xvwesIAC8U4KwKxJ35f2BuT_hY5Stqhlb1RN-_xwDMPhfbIR5v0DThRLCCS58C2xbxNfEj8wAlMXxxtNQes5m9GxnnFm0paPQKnnpu-OiQAXvKj3FdqoFhVIKfsYD9LJ6lp722Wm-jCPHV4S-G8g',
    author: 'Maya L.',
    timestamp: 'Il y a 12s',
    caption: '« Le toast le plus émouvant de la soirée ✨ Santé aux mariés ! »',
    badgeText: 'GuestLens Instant Upload'
  },
  {
    id: 'slide-2',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9LNBEKPiiObFtt9S0GbpUonIhHCBDZAAyW3Usk4huY88LxQC-qCFwgDhXFz7VOI_9WQBNXnyYXDs6E0UigYJaUjQ-jKU89Mxsx7l2ws2IcGtU50k1zR8IBAv2s3CRSivaD2zWZEPYP3oJitxiZBYU0KMqA9wzVRZhAXn6zPepUTKR8fCNKYqCgIIeFzZdvrRk2UYMWsQ7q6nIH4doxYlfwc-eiEdxYviW7-SkWsCtxXAxp9Lti0iPMQ',
    author: 'Léo B.',
    timestamp: 'Il y a 38s',
    caption: '« Table 4 en folie pour l’arrivée de la pièce montée ! »',
    badgeText: 'Table 4 VIP'
  },
  {
    id: 'slide-3',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx_YEcgSkebIwNY6vKR9cfzFnSgaszyBsNNe1cUGMN2D7rcwRAGgyp3MSZIA8EBGoh34Tcuj6AhLcuGwHY79smKLCL3InmxruKpsu_7XUIURTon25rqpsdR5x4BR8FRsjB84zR8VxAez1EtyBN5CyRe4SlvA5OrOrczzOcNwOnbMXdefQedkk5nUTiVYP7jsD_FC23bowmFB51S303Xii96BMT2-NyJQpzmqOpFX3U8uxpwRVVW9kbRg',
    author: 'Camille R.',
    timestamp: 'Il y a 1 min',
    caption: '« Déhanché d’anthologie sur la piste de danse 🕺💥 »',
    badgeText: 'Piste enflammée'
  },
  {
    id: 'slide-4',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlMTmQq93Ne5Se5nUYzw7O9fTBbp921v9i4_aZN29ozWnhpG0w8S-f27juV6yIrXbSc1pdUeGtEyEPgrMjdOdmL2eyMKIMErIzPKYClItTFEgHXSOAzq8LYsEE6Il64BBWw0dlZkuWx-SiFtRewxHEy15LFgmvUQfoI1AwKbA-7IlJbP7-UeWz2KLfbef-4QugZj6kGmtCf0mltIa2tLjqRNS4qAjY2HyFfA9ldDoWQNBMF1dxR8gmsA',
    author: 'Julien T.',
    timestamp: 'Il y a 2 min',
    caption: '« Cocktails signature testés et largement approuvés ! 🍹 »',
    badgeText: 'Bar à cocktails'
  }
];

export const AUDIO_GUESTBOOK_MESSAGES: AudioMessage[] = [
  {
    id: 'audio-1',
    author: 'Camille R.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzUk7U94WIqlpN-DO6fXdjSBogATEkjs2Vevcj5gcHqOZ5LPJubXag-7VEjDfPxZJ897yYBX5EDyIYko4RjLhWmNn2B_Oma6eokETkwseKB3RSc2iU7gmNwthT5TwZH6cXrq4h2QMPtPMIBSqR9IqU9ujRmkoslqtxcMHSbUWqbW30ds3375ORJTaxitpsCr7wyrrQJe04L7PAZTtRDRDKkOHvehd-ky-CF0lEeLE_lJGzHmNE-kiAoQ',
    duration: '01:14',
    timestamp: 'Il y a 10 min'
  },
  {
    id: 'audio-2',
    author: 'Thomas & Alex',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl5WBTsujaPqHQArf8xUdb0tb2NdXXNkZUVNTJj0mTPMZS-jDvdKWea4ap9lPazcw4WWYoqsBN-0ocDdLATx31WT6VaOtadczqDb-Yw4IX2hNbZleHMqsLDApEJrQt773qFMl6a7xTN6dGsPNOR8dUaHkhgP00iJ5ugsFrnmaNfam7vN5GQN6PuDBqFTjSezbd9npq1ajE7nNKMi2kBRIX75zqLEynlDZGGIFnhjLExTfF1grv0JznoQ',
    duration: '00:48',
    timestamp: 'Il y a 1 h'
  },
  {
    id: 'audio-3',
    author: 'Yuki Tanaka',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8091ZF1cIu5kLXTSld0RMkaAccxNI9286dSvXHNJMWRvx1LLSIJ_ZC3O9_MAcO_pkXcbPc8oHPEvBWnTtS1TwzutsLgIGGscmPxk4fV2kGod_UuIopzwrH7L3oJKTMHXDTioweEhe9iLGWfZzpK0ADd5COencvRyY2CwJWS4BOEQ7ZcpgyZRjrjO3InJtml7quPynjIAIkPDyKjL88SotRZHBMqdRkymXGXTzYjrDfi9uXZNQDDix7A',
    duration: '02:05',
    timestamp: 'Hier'
  }
];

export const THEME_PALETTES = [
  { id: 'peach', label: 'Pêche poudrée', color: '#ffd4cf' },
  { id: 'periwinkle', label: 'Pervenche', color: '#d9e2ff' },
  { id: 'mint', label: 'Menthe douce', color: '#d1f4df' },
  { id: 'sky', label: 'Bleu ciel', color: '#d6edff' },
  { id: 'sand', label: 'Sable chaud', color: '#f5e8d5' }
];
