const plants = [
  {
    id: 'HP-ANT-01',
    category: 'anthurium',
    name: 'Anthurium vittarifolium 4 in 1',
    desc_de: 'Eigenregie gezogene Sämlinge. Das Hauptbild zeigt die Mutterpflanze.',
    desc_en: 'Self-grown seedlings. Main photo shows the mother plant.',
    
    // 📸 赏析图 / 母本展示图（点进来第一眼看到的图片）
    cover_images: [
      'images/vitta.jpg'
    ],
    
    // 🪴 出售个体选项（点击后主图和价格自动更新）
    variants: [
      {
        id: "Grower's Choice",
        name_de: "Grower's Choice",
        name_en: "Grower's Choice",
        price: '10.00',
        images: ['images/vitta-a.jpg']
      }
    ]
  },
      {
        id: 'HP-ANT-02', // 序号改一下，比如 02
        category: 'anthurium',
        name: 'Carlablackiae x Dressleri', // 新植物的名字
        desc_de: 'Eigenregie gezogene Sämlinge', // 德语描述
        desc_en: 'Self-grown seedlings', // 英语描述
        variants: [
          {
            id: 'specimen-a',
            name_de: 'Exemplar A',
            name_en: 'Specimen A',
            price: '15.00', // 价格
            images: [
              'images/carlaxdress.jpg' // 新图片的名称
            ]
          }
        ]
      }
    ];
