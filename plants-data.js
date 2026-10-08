const plants = [
      {
        id: 'HP-ANT-01',
        category: 'anthurium',
        name: 'Anthurium vittarifolium 4 in 1',
        desc_de: 'Eigenregie gezogene Sämlinge (4 Pflanzen in einem Topf). Wunderschöne lange, riemenförmige Blätter.',
        desc_en: 'Self-grown seedlings (4 plants in one pot). Gorgeous long, strap-shaped leaves.',
        variants: [
          {
            id: 'specimen-a',
            name_de: 'Exemplar A (4 Sämlinge im Topf)',
            name_en: 'Specimen A (4 Seedlings in Pot)',
            price: '10.00',
            images: [
              'images/vitta.jpg' // 如果图片后缀是 .png，请改为 'images/vitta.png'
            ]
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
