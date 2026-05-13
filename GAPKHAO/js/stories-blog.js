/* ══════════════════════════════════════════════════════════════
   STORIES BLOG - Interactive Blog System
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Blog Data - 10 Bangkok Street Food Blogs
const blogsData = [
  {
    id: 'yaowarat-10-must-try',
    title: '10 Street Food ที่ต้องลองก่อนตายที่เยาวราช 🍜',
    titleZh: '耀华力必尝的10种街头美食 🍜',
    area: 'เยาวราช',
    areaZh: '耀华力',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '12 Jan 2026',
    dateZh: '2026年1月12日',
    readTime: '8 min read',
    readTimeZh: '8分钟阅读',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    excerpt: 'ย่านไชน่าทาวน์ที่ใหญ่ที่สุดในโลก และนี่คือ 10 เมนูระดับตำนานที่ถ้าไม่กินถือว่ามาไม่ถึง',
    excerptZh: '世界上最大的唐人街，这里有10道传奇美食，不吃等于没来过',
    content: `
      <h3>ย่านไชน่าทาวน์ที่ใหญ่ที่สุดในโลก</h3>
      <p>เยาวราชไม่ใช่แค่ย่านการค้า แต่เป็นสวรรค์ของคนรักอาหาร ที่นี่มีอาหารระดับตำนานมากมายที่คุณต้องลองก่อนตาย</p>
      
      <h4>1. กวยจั๊บนายเอ็ก</h4>
      <p>ทีเด็ดคือน้ำซุปพริกไทยขาวที่เผ็ดร้อน สะใจ และหมูกรอบที่ผิวกรอบเนื้อนุ่ม ร้านนี้เปิดมานานกว่า 50 ปี ยังคงรสชาติเดิมที่ลูกค้าประจำติดใจ</p>
      
      <h4>2. ขนมปังเจ้าอร่อยเด็ดเยาวราช</h4>
      <p>ขนมปังปิ้งเตาถ่านที่คิวยาวตลอดกาล แนะนำไส้ "นมสด" และ "สังขยา" ที่ไส้ทะลักจนเลอะมือ ความหอมของเตาถ่านทำให้ขนมปังมีรสชาติพิเศษที่หาที่ไหนไม่ได้</p>
      
      <h4>3. ปาท่องโก๋เสวย</h4>
      <p>ได้รางวัล Michelin Guide แป้งกรอบนอกนุ่มใน ย่างบนเตาถ่านหอมๆ กินคู่กับสังขยาใบเตย ร้านนี้เป็นตำนานของเยาวราชที่ทุกคนต้องมาลอง</p>
      
      <h4>4. คั้นกี่น้ำเต้าทอง</h4>
      <p>ร้านเครื่องดื่มสมุนไพรเก่าแก่ (น้ำขม/น้ำหวาน) ช่วยแก้เลี่ยนและลดความร้อนในร่างกายได้ดี เหมาะสำหรับหลังจากกินอาหารมันๆ</p>
      
      <h4>5. บะหมี่มังกรขาว</h4>
      <p>บะหมี่เกี๊ยวกุ้งที่ใช้เนื้อปูสดๆ วางมาด้านบน เส้นบะหมี่ทำเองเหนียวนุ่ม น้ำซุปกลมกล่อม ราคาไม่แพงแต่คุณภาพระดับพรีเมียม</p>
      
      <h4>6. หอยจ๊อปูทอง</h4>
      <p>หอยจ๊อที่อัดเนื้อปูมาแน่นๆ ทอดมาร้อนๆ จิ้มน้ำจิ้มบ๊วยคือสวรรค์ เมนูนี้เป็นเอกลักษณ์ของเยาวราชที่ต้องลอง</p>
      
      <h4>7. เจ๊ดา ปูทะเลดอง</h4>
      <p>สำหรับสายแซ่บ ปูไข่ดองและกั้งดองน้ำปลาที่สดและสะอาดมาก ร้านนี้คัดสรรวัตถุดิบคุณภาพดีที่สุด</p>
      
      <h4>8. กระเพาะปลาคุณรวย</h4>
      <p>กระเพาะปลาแท้ชิ้นใหญ่ น้ำซุปกลมกล่อม ใส่ไข่นกกระทาและเนื้อปู เมนูหรูหราที่ราคาไม่แพงเกินไป</p>
      
      <h4>9. หมูสะเต๊ะเฮียเม้ง</h4>
      <p>หมูหมักจนเข้าเนื้อ ย่างด้วยไฟกำลังดี น้ำจิ้มถั่วเข้มข้น กินคู่กับข้าวเหนียวร้อนๆ คือความสุข</p>
      
      <h4>10. บัวลอยนิ้วทอง</h4>
      <p>ขนมหวานปิดท้าย บัวลอยงาดำน้ำขิงที่เผ็ดร้อนกำลังดี หรือจะกินแบบนมสดก็ละมุน เหมาะสำหรับปิดท้ายมื้ออาหารที่เยาวราช</p>
      
      <div class="blog-tips">
        <h4>💡 เคล็ดลับการเที่ยวเยาวราช</h4>
        <ul>
          <li>มาช่วงเย็นหลัง 17:00 น. จะได้บรรยากาศที่ดีที่สุด</li>
          <li>เตรียมท้องว่างๆ เพราะมีของกินเยอะมาก</li>
          <li>ใส่รองเท้าสบายๆ เพราะต้องเดินเยอะ</li>
          <li>เตรียมเงินสดไว้ บางร้านไม่รับบัตร</li>
        </ul>
      </div>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://th.trip.com/travel-guide/bangkok/yaowarat-road-78217/" target="_blank">รวมร้านเด็ดและวิธีเดินทางปี 2026 - Trip.com</a> (ข้อมูล MRT วัดมังกร และร้านในตำนาน)</li>
          <li><a href="https://guide.michelin.com/th/th/bangkok-region/bangkok/restaurants" target="_blank">Guide ร้าน Michelin ในเยาวราช - Michelin Guide</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>世界上最大的唐人街</h3>
      <p>耀华力不仅是商业区，更是美食爱好者的天堂。这里有许多传奇美食，你一生必须尝试。</p>
      
      <h4>1. 乃艾卷粉</h4>
      <p>特色是辣味白胡椒汤，爽口过瘾，还有外脆内嫩的脆皮猪肉。这家店已经开了50多年，仍保持着让老顾客着迷的原味。</p>
      
      <h4>2. 耀华力美味面包店</h4>
      <p>炭火烤面包，队伍永远很长。推荐"鲜奶"和"椰奶蛋"馅，馅料溢出弄脏手。炭火的香气让面包有独特的味道。</p>
      
      <h4>3. 瑟威油条</h4>
      <p>获得米其林指南奖，外脆内软，在炭火上烤得香喷喷，配上班兰椰奶蛋。这家店是耀华力的传奇，每个人都必须来尝试。</p>
      
      <h4>4. 坎吉金瓜水</h4>
      <p>古老的草药饮料店（苦水/甜水），有助于解腻和降低体内热量，适合吃完油腻食物后饮用。</p>
      
      <h4>5. 白龙面</h4>
      <p>虾馄饨面，上面放着新鲜蟹肉。面条自制，有嚼劲，汤汁圆润。价格不贵但质量一流。</p>
      
      <h4>6. 蟹肉蚵仔煎</h4>
      <p>蚵仔煎里塞满了蟹肉，炸得热腾腾，蘸梅子酱简直是天堂。这道菜是耀华力的特色，必须尝试。</p>
      
      <h4>7. 姐达腌蟹</h4>
      <p>对于喜欢辣的人，腌蟹卵和腌虾非常新鲜干净。这家店精选最优质的食材。</p>
      
      <h4>8. 坤瑞鱼肚</h4>
      <p>真正的大块鱼肚，汤汁圆润，加入鹌鹑蛋和蟹肉。豪华菜肴但价格不太贵。</p>
      
      <h4>9. 阿明猪肉沙爹</h4>
      <p>猪肉腌制入味，用适当的火烤制，浓郁的花生酱，配上热糯米饭就是幸福。</p>
      
      <h4>10. 金手指汤圆</h4>
      <p>甜点收尾，黑芝麻汤圆配姜汤，辣度刚好，或者配鲜奶也很顺滑。适合在耀华力用餐后收尾。</p>
      
      <div class="blog-tips">
        <h4>💡 游览耀华力小贴士</h4>
        <ul>
          <li>晚上17:00后来会有最好的氛围</li>
          <li>准备空肚子，因为有很多好吃的</li>
          <li>穿舒适的鞋子，因为要走很多路</li>
          <li>准备现金，有些店不接受卡</li>
        </ul>
      </div>
    `,
    location: 'ถนนเยาวราช แขวงสัมพันธวงศ์ เขตสัมพันธวงศ์',
    locationZh: '耀华力路 三攀他旺区 三攀他旺县',
    mapLink: 'https://maps.google.com/?q=Yaowarat+Road+Bangkok'
  },
  {
    id: 'ari-urban-street-food',
    title: 'อารีย์: สตรีทฟู้ดฉบับคนเมือง (Urban Street Food) 🥗',
    titleZh: '阿里：都市街头美食 🥗',
    area: 'อารีย์',
    areaZh: '阿里',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '10 Jan 2026',
    dateZh: '2026年1月10日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    excerpt: 'ย่านที่ขึ้นชื่อเรื่องความชิค แต่ซ่อนร้านเด็ดราคาเป็นกันเองไว้เพียบ',
    excerptZh: '以时尚著称的街区，却隐藏着许多价格亲民的美味餐厅',
    content: `
      <h3>ย่านชิคที่มีร้านเด็ดราคาดี</h3>
      <p>อารีย์เป็นย่านที่ผสมผสานระหว่างความทันสมัยและความเป็นกันเอง มีทั้งร้านอาหารหรูและร้านสตรีทฟู้ดราคาประหยัด</p>
      
      <h4>ก๋วยเตี๋ยวเรือเนื้อตุ๋น (รสเด็ด)</h4>
      <p>ร้านที่เปิดมานานกว่า 40 ปี เนื้อตุ๋นนุ่มละมุน น้ำซุปเข้มข้น รสชาติกลมกล่อม เป็นร้านที่คนในย่านนี้ต้องมากินเป็นประจำ</p>
      
      <h4>ร้านมะยอดการ อาหารเหนือรสแท้</h4>
      <p>อาหารเหนือต้นตำรับที่ทำจากสูตรดั้งเดิม แนะนำแกงฮังเล น้ำพริกหนุ่ม และแคบหมู รสชาติจัดจ้านแบบเหนือแท้ๆ</p>
      
      <h4>รถเข็นผลไม้และขนมไทย</h4>
      <p>หน้าปากซอยอารีย์ 1 มีรถเข็นขายผลไม้สดและขนมไทยมากมาย ราคาถูก คุณภาพดี เหมาะสำหรับซื้อเป็นของว่าง</p>
      
      <div class="blog-highlight">
        <h4>☕ The Vibe</h4>
        <p>เป็นการผสมผสานระหว่าง Grab & Go ของคนทำงาน และ Cafe Hopping บรรยากาศสบายๆ เหมาะสำหรับทุกวัยทุกไลฟ์สไตล์</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ BTS อารีย์ เดินเพียง 5 นาที มีร้านอาหารและคาเฟ่มากมายให้เลือก เหมาะสำหรับมาเดินเล่นทั้งวัน</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.bkkmenu.com/ari-neighborhood-guide" target="_blank">BKKMENU - Ari Neighborhood Guide</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>时尚街区的平价美食</h3>
      <p>阿里是一个融合现代与亲民的街区，既有高档餐厅，也有价格实惠的街头美食。</p>
      
      <h4>炖牛肉船面（美味）</h4>
      <p>开业超过40年的老店，炖牛肉软嫩，汤汁浓郁，味道圆润，是当地居民必吃的餐厅。</p>
      
      <h4>马约卡正宗北方菜</h4>
      <p>传统北方菜，推荐咖喱猪肉、辣椒酱和炸猪皮，味道浓郁，地道的北方风味。</p>
      
      <h4>水果和泰式甜点推车</h4>
      <p>阿里巷1号入口有许多卖新鲜水果和泰式甜点的推车，价格便宜，质量好，适合买来当零食。</p>
      
      <div class="blog-highlight">
        <h4>☕ 氛围</h4>
        <p>融合了上班族的快餐文化和咖啡馆文化，氛围轻松，适合各个年龄段和生活方式。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近BTS阿里站，步行仅5分钟，有许多餐厅和咖啡馆可供选择，适合全天游览。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.bkkmenu.com/ari-neighborhood-guide" target="_blank">BKKMENU - Ari Neighborhood Guide</a></li>
        </ul>
      </div>
    `,
    location: 'ย่านอารีย์ แขวงสามเสนใน เขตพญาไท',
    locationZh: '阿里区 三森内区 帕亚泰县',
    mapLink: 'https://maps.google.com/?q=Ari+Bangkok'
  }
];

// Continue with remaining blogs...
blogsData.push(
  {
    id: 'chok-chai-4-night-empire',
    title: 'โชคชัย 4: อาณาจักรของกินโต้รุ่ง 🌙',
    titleZh: '乔差4：深夜美食帝国 🌙',
    area: 'โชคชัย 4',
    areaZh: '乔差4',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '8 Jan 2026',
    dateZh: '2026年1月8日',
    readTime: '6 min read',
    readTimeZh: '6分钟阅读',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80',
    excerpt: 'ย่านที่คนลาดพร้าวรู้ดีว่า "ไม่มีวันอดตาย" เพราะของกินเยอะตลอด 24 ชั่วโมง',
    excerptZh: '拉差帕劳人都知道这里"永远不会饿死"，因为24小时都有美食',
    content: `
      <h3>ตลาดโต้รุ่งแท้ๆ</h3>
      <p>โชคชัย 4 เป็นย่านที่มีชีวิตชีวาตลอด 24 ชั่วโมง มีร้านอาหารเปิดทั้งกลางวันและกลางคืน เหมาะสำหรับคนที่ชอบกินมื้อดึก</p>
      
      <h4>เครปป้าเฉื่อย (ในตำนาน)</h4>
      <p>เครปที่มีชื่อเสียงมากว่า 30 ปี ไส้เยอะจนล้น แป้งบางกรอบ มีหลายรสชาติให้เลือก ราคาไม่แพงแต่อร่อยมาก ต้องมาลองสักครั้ง</p>
      
      <h4>โจ๊กกองปราบ</h4>
      <p>โจ๊กหมูที่ต้มจนข้าวละลาย เนื้อหมูนุ่ม ใส่ไข่ไก่และปลาหมึก รสชาติกลมกล่อม เปิดตลอด 24 ชั่วโมง</p>
      
      <h4>ร้านสว่างอรุณ เนื้อตุ๋นเจ้าดัง</h4>
      <p>เนื้อตุ๋นที่เปื่อยนุ่ม น้ำซุปเข้มข้น หอมเครื่องเทศ เป็นร้านที่มีชื่อเสียงในย่านนี้มานาน</p>
      
      <div class="blog-highlight">
        <h4>🌙 The Vibe</h4>
        <p>ตลาดโต้รุ่งแท้ๆ คึกคักช่วง 2 ทุ่มเป็นต้นไป บรรยากาศสนุกสนาน มีทั้งของกินและของใช้ให้เลือกซื้อมากมาย</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ MRT ลาดพร้าว เดินประมาณ 10 นาที หรือนั่งรถเมล์สาย 136, 137, 514 ลงหน้าโชคชัย 4</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.wongnai.com/trips/chok-chai-4-restaurants" target="_blank">Wongnai - รวมร้านเด็ดโชคชัย 4</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>真正的深夜市场</h3>
      <p>乔差4是一个24小时充满活力的街区，有白天和晚上营业的餐厅，适合喜欢吃夜宵的人。</p>
      
      <h4>阿姨可丽饼（传奇）</h4>
      <p>超过30年历史的著名可丽饼，馅料多到溢出，皮薄脆，有多种口味可选，价格不贵但很好吃，一定要尝试一次。</p>
      
      <h4>警察局粥</h4>
      <p>猪肉粥煮到米饭融化，猪肉软嫩，加鸡蛋和鱿鱼，味道圆润，24小时营业。</p>
      
      <h4>黎明餐厅 著名炖牛肉</h4>
      <p>炖牛肉软烂，汤汁浓郁，香料芬芳，是这个街区长期以来的著名餐厅。</p>
      
      <div class="blog-highlight">
        <h4>🌙 氛围</h4>
        <p>真正的深夜市场，晚上8点后最热闹，氛围有趣，有很多食物和用品可供选择。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近MRT拉差帕劳站，步行约10分钟，或乘坐136、137、514路公交车在乔差4下车。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.wongnai.com/trips/chok-chai-4-restaurants" target="_blank">Wongnai - รวมร้านเด็ดโชคชัย 4</a></li>
        </ul>
      </div>
    `,
    location: 'ถนนโชคชัย 4 แขวงลาดพร้าว เขตลาดพร้าว',
    locationZh: '乔差4路 拉差帕劳区 拉差帕劳县',
    mapLink: 'https://maps.google.com/?q=Chok+Chai+4+Bangkok'
  },
  {
    id: 'st-louis-treasure',
    title: 'เซนต์หลุยส์ (ซอยจันทน์ 18/7): ขุมทรัพย์ของอร่อย 🥟',
    titleZh: '圣路易斯（占巷18/7）：美食宝藏 🥟',
    area: 'เซนต์หลุยส์',
    areaZh: '圣路易斯',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '6 Jan 2026',
    dateZh: '2026年1月6日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    excerpt: 'ย่านเก่าแก่ที่เต็มไปด้วยคนไทยเชื้อสายจีน ขนมและอาหารที่นี่จึงมีเอกลักษณ์',
    excerptZh: '充满泰籍华人的古老街区，这里的糕点和食物都有独特的特色',
    content: `
      <h3>ชุมชนเก่าแก่ที่มีเสน่ห์</h3>
      <p>เซนต์หลุยส์เป็นย่านเก่าแก่ที่มีประวัติศาสตร์ยาวนาน มีอาหารและขนมที่มีเอกลักษณ์เฉพาะตัว ราคาถูกอย่างไม่น่าเชื่อ</p>
      
      <h4>หยูง้วน ลูกชิ้นปลาในตำนาน</h4>
      <p>ลูกชิ้นปลาที่ทำสดใหม่ทุกวัน เด้งมาก ไม่ใส่แป้ง น้ำซุปกลมกล่อม เป็นร้านที่มีชื่อเสียงมากว่า 50 ปี</p>
      
      <h4>ขาหมูเซนต์หลุยส์</h4>
      <p>ขาหมูตุ๋นจนเนื้อนุ่มหลุดจากกระดูก น้ำพะโล้หอมเครื่องเทศ กินคู่กับข้าวสวยร้อนๆ คือความสุข</p>
      
      <h4>ก๋วยเตี๋ยวหลอด สูตรโบราณ</h4>
      <p>ก๋วยเตี๋ยวหลอดที่ทำตามสูตรโบราณ แป้งบางนุ่ม ไส้หมูสับหอม กินคู่กับน้ำจิ้มรสเด็ด</p>
      
      <div class="blog-highlight">
        <h4>🏘️ The Vibe</h4>
        <p>บรรยากาศชุมชนเก่า อบอุ่น และราคาถูกอย่างไม่น่าเชื่อ เหมาะสำหรับคนที่ชอบบรรยากาศแบบดั้งเดิม</p>
      </div>
      
      <h4>ประวัติของชุมชน</h4>
      <p>เซนต์หลุยส์เป็นชุมชนที่มีประวัติยาวนานกว่า 100 ปี มีวัฒนธรรมไทย-จีนผสมผสานกันอย่างลงตัว</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.timeout.com/bangkok/restaurants/soi-st-louis-food-guide" target="_blank">Time Out Bangkok - Soi St. Louis Food Guide</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>迷人的古老社区</h3>
      <p>圣路易斯是一个历史悠久的古老街区，有独特的食物和糕点，价格便宜得令人难以置信。</p>
      
      <h4>裕源 传奇鱼丸</h4>
      <p>每天新鲜制作的鱼丸，非常有弹性，不含面粉，汤汁圆润，是一家超过50年历史的著名餐厅。</p>
      
      <h4>圣路易斯猪脚</h4>
      <p>炖猪脚直到肉从骨头上脱落，五香卤汁香料芬芳，配上热米饭就是幸福。</p>
      
      <h4>传统卷粉</h4>
      <p>按照传统配方制作的卷粉，皮薄软，猪肉馅香，配上美味的蘸酱。</p>
      
      <div class="blog-highlight">
        <h4>🏘️ 氛围</h4>
        <p>古老社区氛围，温馨，价格便宜得令人难以置信，适合喜欢传统氛围的人。</p>
      </div>
      
      <h4>社区历史</h4>
      <p>圣路易斯是一个拥有100多年历史的社区，泰国和中国文化完美融合。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.timeout.com/bangkok/restaurants/soi-st-louis-food-guide" target="_blank">Time Out Bangkok - Soi St. Louis Food Guide</a></li>
        </ul>
      </div>
    `,
    location: 'ซอยจันทน์ 18/7 (เซนต์หลุยส์) แขวงทุ่งมหาเมฆ เขตสาทร',
    locationZh: '占巷18/7（圣路易斯）通玛哈梅区 沙吞县',
    mapLink: 'https://maps.google.com/?q=Soi+St+Louis+Bangkok'
  },
  {
    id: 'tha-phra-chan-tha-chang',
    title: 'ท่าพระจันทร์-ท่าช้าง: รสชาติแห่งประวัติศาสตร์ริมน้ำ 🛶',
    titleZh: '塔帕占-塔昌：河边的历史风味 🛶',
    area: 'ท่าพระจันทร์-ท่าช้าง',
    areaZh: '塔帕占-塔昌',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '4 Jan 2026',
    dateZh: '2026年1月4日',
    readTime: '8 min read',
    readTimeZh: '8分钟阅读',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    excerpt: 'แหล่งรวมร้านอาหารที่อยู่คู่กับนักศึกษาธรรมศาสตร์และศิลปากรมาหลายทศวรรษ',
    excerptZh: '几十年来与法政大学和艺术大学学生相伴的餐厅聚集地',
    content: `
      <h3>ย่านริมน้ำเจ้าพระยา</h3>
      <p>ท่าพระจันทร์-ท่าช้างเป็นย่านที่มีประวัติศาสตร์ยาวนาน ตั้งอยู่ริมแม่น้ำเจ้าพระยา มีร้านอาหารที่อยู่คู่กับนักศึกษามาหลายรุ่น</p>
      
      <h4>โรตีหน้าเพาะช่าง</h4>
      <p>โรตีที่มีชื่อเสียงมากว่า 40 ปี แป้งบางกรอบ ไส้เยอะ มีทั้งรสหวานและรสคาว เป็นที่นิยมของนักศึกษาและคนทำงานในย่าน</p>
      
      <h4>อรทัย ซูชิวังหลัง (ข้ามฟากไปนิด)</h4>
      <p>ร้านซูชิสไตล์ไทยที่มีรสชาติเป็นเอกลักษณ์ ราคาไม่แพง คุณภาพดี เป็นที่นิยมของคนในย่าน</p>
      
      <h4>ร้านมิตรโกหย่วน อาหารกุ๊กช็อปยุคแรก</h4>
      <p>ร้านอาหารจีนโบราณที่เปิดมานานกว่า 60 ปี มีเมนูอาหารจีนต้นตำรับ รสชาติกลมกล่อม บรรยากาศแบบดั้งเดิม</p>
      
      <div class="blog-highlight">
        <h4>🌊 The Vibe</h4>
        <p>กลิ่นอายริมน้ำเจ้าพระยาและตึกแถวโบราณ บรรยากาศสบายๆ เหมาะสำหรับเดินเล่นและนั่งชิลล์ริมน้ำ</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ท่าเรือพระจันทร์ สามารถเดินทางโดยเรือโดยสารหรือรถเมล์ มีบรรยากาศริมน้ำที่สวยงาม</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.thecloud.co.th/tha-phra-chan-memory" target="_blank">The Cloud - ท่าพระจันทร์ในความทรงจำ</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>湄南河畔街区</h3>
      <p>塔帕占-塔昌是一个历史悠久的街区，位于湄南河畔，有许多陪伴学生多代的餐厅。</p>
      
      <h4>培昌煎饼</h4>
      <p>超过40年历史的著名煎饼，皮薄脆，馅料多，有甜味和咸味，深受学生和上班族欢迎。</p>
      
      <h4>阿泰王朗寿司（过河一点）</h4>
      <p>泰式寿司店，味道独特，价格不贵，质量好，深受当地人欢迎。</p>
      
      <h4>米特果园 早期厨师餐厅</h4>
      <p>开业超过60年的古老中餐厅，有正宗的中国菜，味道圆润，传统氛围。</p>
      
      <div class="blog-highlight">
        <h4>🌊 氛围</h4>
        <p>湄南河畔和古老店屋的气息，氛围轻松，适合散步和河边休闲。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近帕占码头，可乘船或公交车前往，河边风景优美。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.thecloud.co.th/tha-phra-chan-memory" target="_blank">The Cloud - ท่าพระจันทร์ในความทรงจำ</a></li>
        </ul>
      </div>
    `,
    location: 'ท่าพระจันทร์-ท่าช้าง แขวงพระบรมมหาราชวัง เขตพระนคร',
    locationZh: '塔帕占-塔昌 帕博罗玛哈拉差旺区 帕那空县',
    mapLink: 'https://maps.google.com/?q=Tha+Phra+Chan+Bangkok'
  }
);

// Add remaining 4 blogs
blogsData.push(
  {
    id: 'pratu-phi-ghost-gate',
    title: 'สตรีทฟู้ด "ประตูผี": นอกจากผัดไทยมีอะไรดี? 👻',
    titleZh: '鬼门街头美食：除了炒河粉还有什么好吃的？👻',
    area: 'ประตูผี',
    areaZh: '鬼门',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '2 Jan 2026',
    dateZh: '2026年1月2日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    excerpt: 'ย่านที่โด่งดังระดับโลก แต่ยังมีร้านลับที่คนท้องถิ่นชอบไป',
    excerptZh: '世界闻名的街区，但仍有当地人喜欢去的秘密餐厅',
    content: `
      <h3>ย่านประวัติศาสตร์ใกล้เสาชิงช้า</h3>
      <p>ประตูผีเป็นย่านที่มีชื่อเสียงระดับโลก มีร้านอาหารมากมายที่คนท้องถิ่นและนักท่องเที่ยวต่างชื่นชอบ</p>
      
      <h4>ผัดไทยทิพย์สมัย</h4>
      <p>ผัดไทยที่มีชื่อเสียงระดับโลก ใช้วัตถุดิบคุณภาพดี รสชาติกลมกล่อม คิวยาวตลอดเวลา แต่รอคุ้มค่า</p>
      
      <h4>เจ๊ไฝ (Michelin Star)</h4>
      <p>ร้านที่ได้รับดาว Michelin ก๋วยเตี๋ยวเรือรสเด็ด น้ำซุปเข้มข้น เครื่องแน่น ราคาไม่แพงแต่คุณภาพระดับพรีเมียม</p>
      
      <h4>บัวลอยสมหวัง</h4>
      <p>บัวลอยที่มีชื่อเสียง คิวยาวไม่แพ้ร้านอื่น บัวลอยนุ่ม น้ำขิงหอม หรือจะเลือกน้ำกะทิก็อร่อย</p>
      
      <div class="blog-highlight">
        <h4>🌟 The Vibe</h4>
        <p>ย่านประวัติศาสตร์ใกล้เสาชิงช้า แสงไฟสวยงามตอนกลางคืน บรรยากาศคึกคักและมีชีวิตชีวา</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้เสาชิงช้า สามารถเดินทางโดยรถเมล์หรือแท็กซี่ มีที่จอดรถในบริเวณใกล้เคียง</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://guide.michelin.com/th/th/bangkok-region/bangkok/restaurants" target="_blank">Michelin Guide Thailand</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>秋千柱附近的历史街区</h3>
      <p>鬼门是世界闻名的街区，有许多当地人和游客都喜欢的餐厅。</p>
      
      <h4>提萨迈炒河粉</h4>
      <p>世界闻名的炒河粉，使用优质食材，味道圆润，队伍一直很长，但值得等待。</p>
      
      <h4>姐痣（米其林星级）</h4>
      <p>获得米其林星级的餐厅，船面美味，汤汁浓郁，配料丰富，价格不贵但质量一流。</p>
      
      <h4>颂旺汤圆</h4>
      <p>著名的汤圆，队伍不输其他店，汤圆软，姜汤香，或者选择椰奶也很好吃。</p>
      
      <div class="blog-highlight">
        <h4>🌟 氛围</h4>
        <p>秋千柱附近的历史街区，夜晚灯光美丽，氛围热闹有活力。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近秋千柱，可乘公交车或出租车前往，附近有停车场。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://guide.michelin.com/th/th/bangkok-region/bangkok/restaurants" target="_blank">Michelin Guide Thailand</a></li>
        </ul>
      </div>
    `,
    location: 'ย่านประตูผี แขวงบวรนิเวศ เขตพระนคร',
    locationZh: '鬼门区 博沃尼威区 帕那空县',
    mapLink: 'https://maps.google.com/?q=Pratu+Phi+Bangkok'
  },
  {
    id: 'talad-noi-charoen-krung',
    title: 'ตลาดน้อย-เจริญกรุง: การเดินทางของรสชาติ 🥢',
    titleZh: '塔拉诺-乍伦功：风味之旅 🥢',
    area: 'ตลาดน้อย-เจริญกรุง',
    areaZh: '塔拉诺-乍伦功',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '30 Dec 2025',
    dateZh: '2025年12月30日',
    readTime: '6 min read',
    readTimeZh: '6分钟阅读',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    excerpt: 'เจาะลึกอาหารแนวจีนโบราณที่หาทานยาก',
    excerptZh: '深入探索难得一见的古老中国美食',
    content: `
      <h3>ย่านอาหารจีนโบราณ</h3>
      <p>ตลาดน้อย-เจริญกรุงเป็นย่านที่มีอาหารจีนโบราณมากมาย มีร้านอาหารที่เปิดมานานหลายรุ่น</p>
      
      <h4>เป็ดตุ๋นเจ้าท่า</h4>
      <p>เป็ดตุ๋นยาจีนที่เปื่อยนุ่ม น้ำซุปหอมยาจีน เนื้อเป็ดนุ่มละมุน เป็นร้านที่มีชื่อเสียงมากว่า 50 ปี</p>
      
      <h4>กะหรี่ปั๊บคุณปุ๊</h4>
      <p>กะหรี่ปั๊บที่มีรสชาติเป็นเอกลักษณ์ แป้งกรอบนอกนุ่มใน ไส้แกงกะหรี่เข้มข้น กินคู่กับอาจาดหวานเปรี้ยว</p>
      
      <h4>โจ๊กเจ๊หมวยเกี้ย</h4>
      <p>โจ๊กที่ใส่เครื่องแน่นจนมองไม่เห็นข้าว มีทั้งหมูสับ ไข่ไก่ ปลาหมึก และเครื่องในต่างๆ รสชาติกลมกล่อม</p>
      
      <div class="blog-highlight">
        <h4>🎨 The Vibe</h4>
        <p>ตรอกซอกซอยที่มี Street Art สลับกับกลิ่นหอมของเครื่องเทศ บรรยากาศย้อนยุคที่น่าเดินเล่น</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ท่าเรือสี่พระยา สามารถเดินทางโดยเรือโดยสารหรือรถเมล์ มีศิลปะบนถนนมากมายให้ถ่ายรูป</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.creativedistrict.co/charoen-krung-guide" target="_blank">Creative District - Charoen Krung Guide</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>古老中国美食街区</h3>
      <p>塔拉诺-乍伦功是一个有许多古老中国美食的街区，有开业多代的餐厅。</p>
      
      <h4>码头炖鸭</h4>
      <p>中药炖鸭软烂，汤汁中药香，鸭肉软嫩，是一家超过50年历史的著名餐厅。</p>
      
      <h4>坤普咖喱角</h4>
      <p>味道独特的咖喱角，皮外脆内软，咖喱馅浓郁，配上甜酸酱。</p>
      
      <h4>姐妹粥</h4>
      <p>配料多到看不见米饭的粥，有猪肉碎、鸡蛋、鱿鱼和各种内脏，味道圆润。</p>
      
      <div class="blog-highlight">
        <h4>🎨 氛围</h4>
        <p>小巷里有街头艺术与香料香气交织，复古氛围适合散步。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近四帕亚码头，可乘船或公交车前往，有很多街头艺术可以拍照。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.creativedistrict.co/charoen-krung-guide" target="_blank">Creative District - Charoen Krung Guide</a></li>
        </ul>
      </div>
    `,
    location: 'ตลาดน้อย-เจริญกรุง แขวงตลาดน้อย เขตสัมพันธวงศ์',
    locationZh: '塔拉诺-乍伦功 塔拉诺区 三攀他旺县',
    mapLink: 'https://maps.google.com/?q=Talad+Noi+Bangkok'
  },
  {
    id: 'talad-huai-khwang',
    title: 'ตลาดห้วยขวาง: สวรรค์ของสายกินนอนดึก 🌶️',
    titleZh: '怀光市场：深夜美食天堂 🌶️',
    area: 'ตลาดห้วยขวาง',
    areaZh: '怀光市场',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '28 Dec 2025',
    dateZh: '2025年12月28日',
    readTime: '8 min read',
    readTimeZh: '8分钟阅读',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80',
    excerpt: 'ถ้าคุณหิวมื้อดึกตอนตี 2 ที่นี่คือคำตอบ',
    excerptZh: '如果你凌晨2点饿了，这里就是答案',
    content: `
      <h3>ตลาดโต้รุ่งที่คึกคักตลอด 24 ชั่วโมง</h3>
      <p>ตลาดห้วยขวางเป็นตลาดที่มีชีวิตชีวาตลอดทั้งวัน มีร้านอาหารเปิดจนดึกมาก เหมาะสำหรับคนที่ชอบกินมื้อดึก</p>
      
      <h4>กุ้งถัง สาขาแรกๆ</h4>
      <p>กุ้งแช่น้ำปลาที่สดมาก กุ้งตัวใหญ่ เนื้อหวาน กินคู่กับข้าวสวยร้อนๆ คือความสุข เป็นสาขาแรกๆ ที่เปิดมานาน</p>
      
      <h4>ร้านข้าวต้มรอบดึก</h4>
      <p>ข้าวต้มที่เปิดตลอด 24 ชั่วโมง มีเมนูให้เลือกมากมาย ทั้งข้าวต้มหมู ข้าวต้มปลา และข้าวต้มกุ้ง รสชาติกลมกล่อม</p>
      
      <h4>น้ำเต้าหู้เจ๊วรรณ (สาขาใกล้เคียง)</h4>
      <p>น้ำเต้าหู้ร้อนๆ หอมหวาน กินคู่กับปาท่องโก๋กรอบๆ เหมาะสำหรับมื้อเช้าหรือมื้อดึก</p>
      
      <div class="blog-highlight">
        <h4>🌙 The Vibe</h4>
        <p>คึกคัก สนุกสนาน มีของกินรสจัดจ้านแบบอีสานเยอะมาก บรรยากาศตลาดที่มีชีวิตชีวาตลอดเวลา</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ MRT ห้วยขวาง เดินเพียง 5 นาที มีร้านอาหารและร้านค้ามากมายเปิดจนดึก</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://travel.trueid.net/huai-khwang-food-guide" target="_blank">Travel.TrueID - พิกัดกินห้วยขวาง</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>24小时热闹的深夜市场</h3>
      <p>怀光市场是一个全天充满活力的市场，有很多营业到很晚的餐厅，适合喜欢吃夜宵的人。</p>
      
      <h4>虾桶 早期分店</h4>
      <p>鱼露腌虾非常新鲜，虾大肉甜，配上热米饭就是幸福，是开业很久的早期分店之一。</p>
      
      <h4>深夜粥店</h4>
      <p>24小时营业的粥店，有很多菜单可选，包括猪肉粥、鱼粥和虾粥，味道圆润。</p>
      
      <h4>姐婉豆浆（附近分店）</h4>
      <p>热豆浆香甜，配上脆油条，适合早餐或夜宵。</p>
      
      <div class="blog-highlight">
        <h4>🌙 氛围</h4>
        <p>热闹有趣，有很多东北风味的辛辣食物，市场氛围一直充满活力。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近MRT怀光站，步行仅5分钟，有很多餐厅和商店营业到很晚。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://travel.trueid.net/huai-khwang-food-guide" target="_blank">Travel.TrueID - พิกัดกินห้วยขวาง</a></li>
        </ul>
      </div>
    `,
    location: 'ตลาดห้วยขวาง แขวงห้วยขวาง เขตห้วยขวาง',
    locationZh: '怀光市场 怀光区 怀光县',
    mapLink: 'https://maps.google.com/?q=Huai+Khwang+Market+Bangkok'
  },
  {
    id: 'wang-lang',
    title: 'วังหลัง: สตรีทฟู้ดสายช้อปปิ้ง 👜',
    titleZh: '王朗：购物街头美食 👜',
    area: 'วังหลัง',
    areaZh: '王朗',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '26 Dec 2025',
    dateZh: '2025年12月26日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    excerpt: 'สวรรค์ของคนรักขนมหวานและของทานเล่นริมน้ำ',
    excerptZh: '甜点和小吃爱好者的河边天堂',
    content: `
      <h3>ตลาดริมน้ำที่คึกคัก</h3>
      <p>วังหลังเป็นตลาดที่มีชื่อเสียงในเรื่องขนมหวานและของทานเล่น มีทั้งร้านอาหารและร้านขายเสื้อผ้ามือสอง</p>
      
      <h4>ขนมปังวังหลัง (ไส้เยอะจนทะลัก)</h4>
      <p>ขนมปังปิ้งที่มีไส้เยอะมาก มีหลายรสชาติให้เลือก ทั้งรสหวานและรสคาว ราคาถูก คุณภาพดี</p>
      
      <h4>ถังแตกป้าติ๋ม</h4>
      <p>ขนมไทยโบราณที่ทำสดใหม่ทุกวัน มีหลายรสชาติให้เลือก รสชาติหวานมัน อร่อยมาก</p>
      
      <h4>หมูทอดชาววัง</h4>
      <p>หมูทอดที่มีรสชาติหวานเค็มลงตัว กรอบนอกนุ่มใน กินคู่กับข้าวเหนียวร้อนๆ คือความสุข</p>
      
      <div class="blog-highlight">
        <h4>🛍️ The Vibe</h4>
        <p>ทางเดินแคบๆ ที่อัดแน่นไปด้วยของกินและเสื้อผ้ามือสอง บรรยากาศสนุกสนาน เหมาะสำหรับมาเดินเล่นและช้อปปิ้ง</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ท่าเรือวังหลัง สามารถเดินทางโดยเรือโดยสารข้ามฟาก หรือรถเมล์ มีบรรยากาศริมน้ำที่สวยงาม</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.chillpainai.com/wang-lang-market" target="_blank">Chillpainai - ตะลุยตลาดวังหลัง</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>热闹的河边市场</h3>
      <p>王朗是一个以甜点和小吃闻名的市场，有餐厅和二手服装店。</p>
      
      <h4>王朗面包（馅料多到溢出）</h4>
      <p>烤面包馅料非常多，有多种口味可选，包括甜味和咸味，价格便宜，质量好。</p>
      
      <h4>阿婶爆桶</h4>
      <p>每天新鲜制作的传统泰式甜点，有多种口味可选，甜而油腻，非常好吃。</p>
      
      <h4>王朝炸猪肉</h4>
      <p>炸猪肉甜咸适中，外脆内软，配上热糯米饭就是幸福。</p>
      
      <div class="blog-highlight">
        <h4>🛍️ 氛围</h4>
        <p>狭窄的走道挤满了食物和二手衣服，氛围有趣，适合散步和购物。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近王朗码头，可乘渡船或公交车前往，河边风景优美。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.chillpainai.com/wang-lang-market" target="_blank">Chillpainai - ตะลุยตลาดวังหลัง</a></li>
        </ul>
      </div>
    `,
    location: 'ตลาดวังหลัง แขวงศิริราช เขตบางกอกน้อย',
    locationZh: '王朗市场 诗丽叻区 曼谷诺县',
    mapLink: 'https://maps.google.com/?q=Wang+Lang+Market+Bangkok'
  },
  {
    id: 'phra-athit-road',
    title: 'ถนนพระอาทิตย์: อาหารคลาสสิกริมสวน 🌳',
    titleZh: '帕阿提路：公园旁的经典美食 🌳',
    area: 'ถนนพระอาทิตย์',
    areaZh: '帕阿提路',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '24 Dec 2025',
    dateZh: '2025年12月24日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    excerpt: 'ย่านที่มีเสน่ห์ที่สุดแห่งหนึ่งในกรุงเทพฯ เดินเล่นริมน้ำและหาของกินอร่อย',
    excerptZh: '曼谷最迷人的街区之一，河边散步和寻找美食',
    content: `
      <h3>ย่านริมน้ำที่มีเสน่ห์</h3>
      <p>ถนนพระอาทิตย์เป็นย่านที่มีเสน่ห์มาก มีร้านอาหารและคาเฟ่มากมาย เหมาะสำหรับเดินเล่นและนั่งชิลล์ริมน้ำ</p>
      
      <h4>โรตีมะตะบะ ร้านดัง</h4>
      <p>โรตีที่มีชื่อเสียงมากว่า 30 ปี แป้งบางกรอบ ไส้เยอะ มีหลายรสชาติให้เลือก ราคาไม่แพงแต่อร่อยมาก</p>
      
      <h4>ก๋วยจั๊บญวนคุณแดง</h4>
      <p>ก๋วยจั๊บญวนที่มีรสชาติเป็นเอกลักษณ์ น้ำซุปเข้มข้น เครื่องแน่น ราคาไม่แพงแต่คุณภาพดี</p>
      
      <h4>ร้านโภชนสยามา</h4>
      <p>ร้านอาหารไทยโบราณที่มีเมนูอาหารไทยต้นตำรับ รสชาติกลมกล่อม บรรยากาศแบบดั้งเดิม</p>
      
      <div class="blog-highlight">
        <h4>🌳 The Vibe</h4>
        <p>ชิลล์ๆ สบายๆ เหมาะกับการเดินกินลมชมวิวช่วงเย็น มีสวนสาธารณะและริมน้ำให้นั่งพักผ่อน</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ท่าเรือพระอาทิตย์ สามารถเดินทางโดยเรือโดยสารหรือรถเมล์ มีบรรยากาศริมน้ำที่สวยงาม</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://travel.kapook.com/phra-athit-road" target="_blank">Kapook Travel - เที่ยวถนนพระอาทิตย์</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>迷人的河边街区</h3>
      <p>帕阿提路是一个非常迷人的街区，有许多餐厅和咖啡馆，适合散步和河边休闲。</p>
      
      <h4>马塔巴煎饼 著名店</h4>
      <p>超过30年历史的著名煎饼，皮薄脆，馅料多，有多种口味可选，价格不贵但很好吃。</p>
      
      <h4>坤丹越南卷粉</h4>
      <p>味道独特的越南卷粉，汤汁浓郁，配料丰富，价格不贵但质量好。</p>
      
      <h4>暹罗餐厅</h4>
      <p>传统泰国餐厅，有正宗的泰国菜，味道圆润，传统氛围。</p>
      
      <div class="blog-highlight">
        <h4>🌳 氛围</h4>
        <p>轻松舒适，适合傍晚散步赏景，有公园和河边可以休息。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近帕阿提码头，可乘船或公交车前往，河边风景优美。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://travel.kapook.com/phra-athit-road" target="_blank">Kapook Travel - เที่ยวถนนพระอาทิตย์</a></li>
        </ul>
      </div>
    `,
    location: 'ถนนพระอาทิตย์ แขวงชนะสงคราม เขตพระนคร',
    locationZh: '帕阿提路 差那颂堪区 帕那空县',
    mapLink: 'https://maps.google.com/?q=Phra+Athit+Road+Bangkok'
  }
);


// Blog Modal System
class BlogModal {
  constructor() {
    this.overlay = null;
    this.currentBlog = null;
    this.init();
  }

  init() {
    // Create modal overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'blog-modal-overlay';
    document.body.appendChild(this.overlay);

    // Add event listeners
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(blogId) {
    const blog = blogsData.find(b => b.id === blogId);
    if (!blog) return;

    this.currentBlog = blog;
    this.render(blog);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Show modal
    setTimeout(() => {
      this.overlay.classList.add('active');
    }, 10);
  }

  close() {
    this.overlay.classList.remove('active');
    
    // Allow body scroll
    document.body.style.overflow = '';
    
    // Clear content after animation
    setTimeout(() => {
      this.overlay.innerHTML = '';
    }, 400);
  }

  render(blog) {
    // Get current language
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    // Use Chinese translations if available
    const title = (currentLang === 'zh' && blog.titleZh) ? blog.titleZh : blog.title;
    const area = (currentLang === 'zh' && blog.areaZh) ? blog.areaZh : blog.area;
    const author = (currentLang === 'zh' && blog.authorZh) ? blog.authorZh : blog.author;
    const date = (currentLang === 'zh' && blog.dateZh) ? blog.dateZh : blog.date;
    const readTime = (currentLang === 'zh' && blog.readTimeZh) ? blog.readTimeZh : blog.readTime;
    const excerpt = (currentLang === 'zh' && blog.excerptZh) ? blog.excerptZh : blog.excerpt;
    const content = (currentLang === 'zh' && blog.contentZh) ? blog.contentZh : blog.content;
    const location = (currentLang === 'zh' && blog.locationZh) ? blog.locationZh : blog.location;
    
    const modalHTML = `
      <div class="blog-modal">
        <button class="blog-close-btn" aria-label="Close blog">✕</button>
        
        <!-- Hero Section -->
        <div class="blog-hero">
          <img src="${blog.image}" alt="${title}" class="blog-hero-image" />
          <div class="blog-hero-overlay">
            <span class="blog-area-badge">${area}</span>
            <h1 class="blog-modal-title">${title}</h1>
            <div class="blog-meta">
              <span>${currentLang === 'zh' ? '作者' : 'โดย'} ${author}</span>
              <span>•</span>
              <span>${date}</span>
              <span>•</span>
              <span>${readTime}</span>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="blog-modal-content">
          <div class="blog-excerpt">
            <p>${excerpt}</p>
          </div>
          
          <div class="blog-body">
            ${content}
          </div>

          <!-- Location Section -->
          <div class="blog-location-section">
            <h3 class="blog-location-title">📍 ${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</h3>
            <p class="blog-location-text">${location}</p>
            <a href="${blog.mapLink}" target="_blank" class="blog-map-btn">
              ${currentLang === 'zh' ? '在 Google 地图中打开 →' : 'เปิดใน Google Maps →'}
            </a>
          </div>

          <!-- Share Section -->
          <div class="blog-share-section">
            <h4>${currentLang === 'zh' ? '分享这篇文章' : 'แชร์บทความนี้'}</h4>
            <div class="blog-share-buttons">
              <button class="share-btn" onclick="navigator.share ? navigator.share({title: '${title}', url: window.location.href}) : alert('${currentLang === 'zh' ? '不支持分享功能' : 'Share feature not supported'}')">
                📱 ${currentLang === 'zh' ? '分享' : 'แชร์'}
              </button>
              <button class="share-btn" onclick="navigator.clipboard.writeText(window.location.href).then(() => alert('${currentLang === 'zh' ? '已复制链接！' : 'คัดลอกลิงก์แล้ว!'}'))">
                🔗 ${currentLang === 'zh' ? '复制链接' : 'คัดลอกลิงก์'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.overlay.innerHTML = modalHTML;

    // Add close button handler
    const closeBtn = this.overlay.querySelector('.blog-close-btn');
    closeBtn.addEventListener('click', () => this.close());
  }
}

// Blog Grid Manager
class BlogGrid {
  constructor() {
    this.blogModal = new BlogModal();
    this.showingAll = false;
    this.init();
  }

  init() {
    this.renderBlogGrid();
    this.attachEventListeners();
  }

  renderBlogGrid() {
    const blogContainer = document.querySelector('.stories-blog');
    if (!blogContainer) return;

    // Clear existing content
    blogContainer.innerHTML = `
      <h3 class="stories-col-title">Street Stories Blog</h3>
      <div class="blog-grid" id="blogGrid"></div>
      <button class="btn btn--primary blog-show-all-btn" id="showAllBtn">
        อ่านทั้งหมด →
      </button>
    `;

    this.updateBlogDisplay();
  }

  updateBlogDisplay() {
    const blogGrid = document.getElementById('blogGrid');
    const blogsToShow = this.showingAll ? blogsData : blogsData.slice(0, 3);

    blogGrid.innerHTML = blogsToShow.map(blog => `
      <article class="blog-card-new" data-blog-id="${blog.id}">
        <div class="blog-card-image" style="background-image: url('${blog.image}')"></div>
        <div class="blog-card-content">
          <span class="blog-card-area">${blog.area}</span>
          <h4 class="blog-card-title">${blog.title}</h4>
          <p class="blog-card-excerpt">${blog.excerpt}</p>
          <div class="blog-card-meta">
            <span>${blog.author}</span>
            <span>•</span>
            <span>${blog.readTime}</span>
          </div>
        </div>
      </article>
    `).join('');

    // Update button text
    const showAllBtn = document.getElementById('showAllBtn');
    if (showAllBtn) {
      showAllBtn.textContent = this.showingAll ? '← แสดงน้อยลง' : 'อ่านทั้งหมด →';
    }

    // Attach click handlers to blog cards
    this.attachCardHandlers();
  }

  attachCardHandlers() {
    const blogCards = document.querySelectorAll('.blog-card-new');
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog-id');
        this.blogModal.open(blogId);
      });
    });
  }

  attachEventListeners() {
    // Show all button
    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'showAllBtn') {
        this.showingAll = !this.showingAll;
        this.updateBlogDisplay();
        
        // Scroll to grid if showing all
        if (this.showingAll) {
          document.getElementById('blogGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BlogGrid();
  });
} else {
  new BlogGrid();
}


// Horizontal Blogs Page Manager
class HorizontalBlogsPage {
  constructor() {
    this.blogModal = new BlogModal();
    this.init();
  }

  init() {
    const blogsGrid = document.getElementById('blogsHorizontalGrid');
    if (!blogsGrid) return; // Not on blogs page

    this.renderHorizontalBlogs();
  }

  renderHorizontalBlogs() {
    const blogsGrid = document.getElementById('blogsHorizontalGrid');
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    blogsGrid.innerHTML = blogsData.map((blog, index) => {
      const title = (currentLang === 'zh' && blog.titleZh) ? blog.titleZh : blog.title;
      const area = (currentLang === 'zh' && blog.areaZh) ? blog.areaZh : blog.area;
      const author = (currentLang === 'zh' && blog.authorZh) ? blog.authorZh : blog.author;
      const date = (currentLang === 'zh' && blog.dateZh) ? blog.dateZh : blog.date;
      const readTime = (currentLang === 'zh' && blog.readTimeZh) ? blog.readTimeZh : blog.readTime;
      const excerpt = (currentLang === 'zh' && blog.excerptZh) ? blog.excerptZh : blog.excerpt;
      
      return `
      <article class="blog-card-horizontal" data-blog-id="${blog.id}">
        <div class="blog-card-h-image">
          <div class="blog-card-h-number">${String(index + 1).padStart(2, '0')}</div>
          <img src="${blog.image}" alt="${title}" />
        </div>
        <div class="blog-card-h-content">
          <span class="blog-card-h-area">${area}</span>
          <h2 class="blog-card-h-title">${title}</h2>
          <p class="blog-card-h-excerpt">${excerpt}</p>
          <div class="blog-card-h-meta">
            <span>✍️ ${author}</span>
            <span>•</span>
            <span>📅 ${date}</span>
            <span>•</span>
            <span>⏱️ ${readTime}</span>
          </div>
          <div class="blog-card-h-read-more">
            ${currentLang === 'zh' ? '阅读全文 →' : 'อ่านเรื่องเต็ม →'}
          </div>
        </div>
      </article>
    `;
    }).join('');

    // Attach click handlers
    this.attachCardHandlers();
  }

  attachCardHandlers() {
    const blogCards = document.querySelectorAll('.blog-card-horizontal');
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog-id');
        this.blogModal.open(blogId);
      });
    });
  }
}

// Initialize Horizontal Blogs Page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const horizontalBlogsPage = new HorizontalBlogsPage();
    
    // Re-render when language changes
    if (window.switchLanguage) {
      const originalSwitchLanguage = window.switchLanguage;
      window.switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        // Re-render blogs with new language
        if (horizontalBlogsPage) {
          horizontalBlogsPage.renderHorizontalBlogs();
        }
      };
    }
  });
} else {
  const horizontalBlogsPage = new HorizontalBlogsPage();
  
  // Re-render when language changes
  if (window.switchLanguage) {
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function(lang) {
      originalSwitchLanguage(lang);
      // Re-render blogs with new language
      if (horizontalBlogsPage) {
        horizontalBlogsPage.renderHorizontalBlogs();
      }
    };
  }
}
