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
    id: 'songwad-talad-noi',
    title: 'ทรงวาด-ตลาดน้อย: ย่านประวัติศาสตร์ที่ไม่เคยหลับ 🏛️',
    titleZh: '颂瓦-塔拉诺：永不沉睡的历史街区 🏛️',
    area: 'ทรงวาด-ตลาดน้อย',
    areaZh: '颂瓦-塔拉诺',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '10 Jan 2026',
    dateZh: '2026年1月10日',
    readTime: '7 min read',
    readTimeZh: '7分钟阅读',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    excerpt: 'ย่านการค้าเก่าแก่ริมน้ำเจ้าพระยาที่ปัจจุบันกลายเป็นย่านสุด Hip',
    excerptZh: '湄南河畔的古老商业区，如今变成了最时髦的街区',
    content: `
      <h3>ย่านประวัติศาสตร์ริมแม่น้ำ</h3>
      <p>ทรงวาด-ตลาดน้อย เป็นย่านการค้าเก่าแก่ที่มีประวัติศาสตร์ยาวนานกว่า 200 ปี ปัจจุบันกลายเป็นย่านที่ผสมผสานระหว่างความเก่าและใหม่ได้อย่างลงตัว</p>
      
      <h4>ก๋วยเตี๋ยวลูกชิ้นปลาลิ้มเหล่าโหงว</h4>
      <p>ตั้งอยู่หน้าตึกเก่า บะหมี่เย็นตาโฟที่ลูกชิ้นปลาเด้งแบบไม่ผสมแป้ง ทำสดใหม่ทุกวัน รสชาติกลมกล่อม เป็นร้านที่ชาวบ้านในย่านนี้กินกันมาหลายชั่วอายุคน</p>
      
      <h4>กะหรี่ปั๊บคุณปุ๊ (ตลาดน้อย)</h4>
      <p>แป้งบางซ้อนกันเป็นชั้นๆ ไส้ไก่และไส้เผือกคือ Best Seller ที่หมดไวมาก ต้องมาตั้งแต่เช้าถึงจะได้กิน กะหรี่ปั๊บที่นี่ทำตามสูตรดั้งเดิมที่ได้รับการถ่ายทอดมาหลายรุ่น</p>
      
      <h4>ร้านเป็ดตุ๋นเจ้าท่า</h4>
      <p>ตำนานความอร่อยริมน้ำที่เนื้อเป็ดเปื่อยจนหลุดออกจากกระดูก น้ำซุปพะโล้เข้มข้น หอมเครื่องเทศ ร้านนี้เปิดมานานกว่า 60 ปี</p>
      
      <h4>จุดเช็คอิน: โซว เฮง ไถ่</h4>
      <p>คฤหาสน์จีนโบราณอายุ 200 ปี ที่ยังคงรักษาสถาปัตยกรรมดั้งเดิมไว้ได้อย่างสมบูรณ์ มีทางเดินริมน้ำที่มีภาพเขียนเล่าประวัติศาสตร์ย่านนี้</p>
      
      <div class="blog-highlight">
        <h4>🎨 ศิลปะและวัฒนธรรม</h4>
        <p>ย่านนี้มีกราฟิตี้และ Street Art มากมาย เล่าเรื่องราวของชุมชนและประวัติศาสตร์ของย่าน เหมาะสำหรับคนรักการถ่ายรูป</p>
      </div>
      
      <h4>บรรยากาศของย่าน</h4>
      <p>ทรงวาด-ตลาดน้อยมีเสน่ห์เฉพาะตัว ตึกเก่าแก่ ร้านกาแฟสไตล์ Vintage และร้านอาหารดั้งเดิมอยู่ร่วมกันอย่างกลมกลืน ทำให้ย่านนี้เป็นที่นิยมของทั้งคนรุ่นเก่าและคนรุ่นใหม่</p>
    `,
    contentZh: `
      <h3>河畔历史街区</h3>
      <p>颂瓦-塔拉诺是一个拥有200多年历史的古老商业区，如今已成为完美融合新旧的街区。</p>
      
      <h4>林老鱼丸面</h4>
      <p>位于老建筑前，冷面鱼丸不含面粉，每天新鲜制作，味道圆润，是当地居民几代人都喜欢的店铺。</p>
      
      <h4>坤普咖喱角（塔拉诺）</h4>
      <p>薄皮层层叠叠，鸡肉馅和芋头馅是最畅销的，很快就卖完。必须早上来才能吃到。这里的咖喱角按照传统配方制作，代代相传。</p>
      
      <h4>老码头炖鸭店</h4>
      <p>河畔美味传奇，鸭肉炖得从骨头上脱落，五香卤汁浓郁，香料芬芳。这家店已经开了60多年。</p>
      
      <h4>打卡点：邵兴泰</h4>
      <p>200年历史的中式古宅，完整保留了原始建筑风格。有河畔步道，墙上的画讲述着这个街区的历史。</p>
      
      <div class="blog-highlight">
        <h4>🎨 艺术与文化</h4>
        <p>这个街区有许多涂鸦和街头艺术，讲述社区和街区历史的故事，适合摄影爱好者。</p>
      </div>
      
      <h4>街区氛围</h4>
      <p>颂瓦-塔拉诺有独特的魅力，古老建筑、复古风格咖啡馆和传统餐厅和谐共存，使这个街区深受老一辈和年轻人的喜爱。</p>
    `,
    location: 'ถนนทรงวาด-ตลาดน้อย แขวงตลาดน้อย เขตสัมพันธวงศ์',
    locationZh: '颂瓦-塔拉诺路 塔拉诺区 三攀他旺县',
    mapLink: 'https://maps.google.com/?q=Song+Wat+Talad+Noi+Bangkok'
  }
];

// Continue with remaining blogs...
blogsData.push(
  {
    id: 'street-art-alleys',
    title: 'Street Art ในตรอกเล็กๆ: ศิลปะที่ซ่อนตัวอยู่ 🎨',
    area: 'เจริญกรุง-คลองโอ่งอ่าง',
    author: 'อินทิรา',
    date: '8 Jan 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80',
    excerpt: 'ลายแทงสำหรับสายถ่ายรูปที่อยากเสพศิลป์ไปพร้อมกับการกิน',
    content: `
      <h3>ศิลปะบนกำแพง</h3>
      <p>กรุงเทพมีศิลปะบนกำแพงมากมายที่ซ่อนตัวอยู่ในตรอกเล็กๆ รอให้คุณมาค้นพบ แต่ละภาพเล่าเรื่องราวของชุมชนและวัฒนธรรมท้องถิ่น</p>
      
      <h4>เจริญกรุง 32</h4>
      <p>ซอยที่มีกราฟิตี้จากศิลปินชื่อดังเพียบ ตั้งแต่หน้าร้านกาแฟไปจนถึงกำแพงตึกเก่า ภาพวาดที่นี่มีทั้งสไตล์โมเดิร์นและแบบดั้งเดิม สะท้อนความหลากหลายของศิลปะไทย</p>
      
      <h4>คลองโอ่งอ่าง</h4>
      <p>ถนนคนเดินที่มี Street Art บอกเล่าวิถีชีวิตคนไทย จีน และอินเดีย มีของกินแนวปิ้งย่างและขนมพื้นบ้านเพียบ เหมาะสำหรับมาเดินเล่นช่วงเย็น</p>
      
      <h4>ชุมชนกุฎีจีน</h4>
      <p>ทางเดินเล็กๆ ริมน้ำที่มีภาพวาดแสดงถึงวัฒนธรรมไทย-โปรตุเกส และต้องลอง "ขนมฝรั่งกุฎีจีน" สูตรดั้งเดิมที่หาทานได้ยากในปัจจุบัน</p>
      
      <div class="blog-photo-tips">
        <h4>📸 เคล็ดลับการถ่ายรูป</h4>
        <ul>
          <li>มาช่วงเช้าหรือเย็นจะได้แสงสวยที่สุด</li>
          <li>ใช้เลนส์กว้างเพื่อจับภาพทั้งหมด</li>
          <li>ถ่ายรูปกับชาวบ้านเพื่อเพิ่มความมีชีวิตชีวา</li>
          <li>เคารพพื้นที่ส่วนตัวของชาวบ้าน</li>
        </ul>
      </div>
      
      <h4>อาหารในย่าน</h4>
      <p>นอกจากศิลปะแล้ว ย่านนี้ยังมีร้านอาหารและคาเฟ่น่ารักๆ มากมาย เหมาะสำหรับนั่งพักและชมศิลปะไปพร้อมกัน</p>
    `,
    location: 'ย่านเจริญกรุง-คลองโอ่งอ่าง',
    mapLink: 'https://maps.google.com/?q=Charoen+Krung+32+Bangkok'
  },
  {
    id: 'bantat-thong-nightlife',
    title: 'บรรทัดทอง: แหล่งรวมตัวของคนนอนดึก 🏢',
    area: 'บรรทัดทอง',
    author: 'อินทิรา',
    date: '6 Jan 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    excerpt: 'ย่านที่มาแรงที่สุดในปี 2026 เปลี่ยนจากแหล่งอะไหล่รถเป็นสวรรค์ของวัยรุ่น',
    content: `
      <h3>ย่านที่กำลังมาแรง</h3>
      <p>บรรทัดทองเปลี่ยนโฉมจากย่านอะไหล่รถเป็นย่านอาหารและบาร์ที่ฮิปที่สุดในกรุงเทพ เปิดจนดึก เหมาะสำหรับคนที่ชอบบรรยากาศกลางคืน</p>
      
      <h4>เจ๊โอว: มาม่าโอ้โห</h4>
      <p>มาม่าโอ้โห (หมูสับ/ทะเล) และคอหมูทอดคือเมนูบังคับหนึ่ง ร้านนี้เปิดจนตี 2 เหมาะสำหรับมื้อดึกหลังเที่ยว ราคาไม่แพงแต่อร่อยมาก</p>
      
      <h4>หนึ่ง นม นัว</h4>
      <p>ร้านขนมปังและนมสดที่ส่งตรงจากภูเก็ต คิวยาวแต่คุ้มค่าที่ได้ลอง ขนมปังอบกรอบดิปซอส เมนูยอดนิยมคือ "ขนมปังเนยนม" ที่หอมมันละมุน</p>
      
      <h4>CQK Hotpot</h4>
      <p>หม่าล่าหม้อไฟร้านดังที่คนรักความเผ็ดร้อนต้องมาเช็คอิน มีระดับความเผ็ดให้เลือก 5 ระดับ แนะนำระดับ 3 สำหรับคนทานเผ็ดได้ปานกลาง</p>
      
      <div class="blog-nightlife">
        <h4>🌙 บรรยากาศกลางคืน</h4>
        <p>บรรทัดทองมีชีวิตชีวาที่สุดช่วง 20:00-02:00 น. มีทั้งร้านอาหาร บาร์ และคาเฟ่ให้เลือกมากมาย บรรยากาศเป็นกันเอง เหมาะสำหรับมากับเพื่อนๆ</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ MRT สุขุมวิท เดินประมาณ 10 นาที หรือจะนั่งแท็กซี่/Grab ก็สะดวก มีที่จอดรถแต่ช่วงเย็นมักจะเต็ม แนะนำมาด้วยขนส่งสาธารณะ</p>
    `,
    location: 'ถนนบรรทัดทอง แขวงคลองเตย เขตคลองเตย',
    mapLink: 'https://maps.google.com/?q=Bantat+Thong+Road+Bangkok'
  },
  {
    id: 'talad-phlu-legend',
    title: 'ตลาดพลู: ตำนานความอร่อยแห่งฝั่งธนบุรี 🚂',
    area: 'ตลาดพลู',
    author: 'อินทิรา',
    date: '4 Jan 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    excerpt: 'ย่านริมทางรถไฟที่อาหารอร่อยจนต้องยอมนั่งรถข้ามฝั่งมา',
    content: `
      <h3>ตลาดริมทางรถไฟ</h3>
      <p>ตลาดพลูเป็นตลาดเก่าแก่ที่ตั้งอยู่ริมทางรถไฟ มีอาหารอร่อยมากมายที่คนรักอาหารต้องมาลอง บรรยากาศแบบดั้งเดิมที่ยังคงรักษาไว้ได้</p>
      
      <h4>กุยช่ายตลาดพลู</h4>
      <p>แนะนำเจ้าที่อยู่หน้าสถานีรถไฟ แป้งบางเฉียบ ไส้เยอะ น้ำจิ้มรสเด็ด ทำสดใหม่ทุกวัน ราคาถูก 3 ชิ้น 30 บาท</p>
      
      <h4>หมี่กรอบจีนหลี</h4>
      <p>ร้านอาหารไทย-จีนสมัยรัชกาลที่ 5 หมี่กรอบสูตรชาววังที่มีกลิ่นส้มซ่าหอมขึ้นจมูก ราดด้วยน้ำราดที่มีเนื้อสัตว์และผักหลากหลาย</p>
      
      <h4>เตี้ยเย็นตาโฟ</h4>
      <p>เย็นตาโฟรสจัดจ้านที่ไม่ต้องปรุงเพิ่ม พร้อมลูกชิ้นแคะทำเอง น้ำซุปเข้มข้น มีทั้งแบบน้ำใสและน้ำแดง</p>
      
      <div class="blog-local-tip">
        <h4>🚂 เคล็ดลับท้องถิ่น</h4>
        <p>มาช่วงเช้าจะได้ของสดใหม่ที่สุด และหลีกเลี่ยงรถไฟผ่าน ถ้ามาช่วงเย็นจะได้บรรยากาศตลาดที่คึกคักและมีร้านอาหารเปิดเยอะกว่า</p>
      </div>
      
      <h4>ประวัติของตลาด</h4>
      <p>ตลาดพลูมีประวัติยาวนานกว่า 100 ปี เริ่มจากชุมชนสวนพลูที่ปลูกต้นพลูขาย ต่อมาพัฒนาเป็นตลาดที่มีร้านค้าและร้านอาหารมากมาย</p>
    `,
    location: 'ถนนเทอดไท แขวงตลาดพลู เขตธนบุรี',
    mapLink: 'https://maps.google.com/?q=Talad+Phlu+Bangkok'
  }
);

// Add remaining 4 blogs
blogsData.push(
  {
    id: 'bang-rak-breakfast',
    title: 'บางรัก: ศึกมื้อเช้าและเป็ดย่างในตำนาน 🍲',
    area: 'บางรัก',
    author: 'อินทิรา',
    date: '2 Jan 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    excerpt: 'ย่านเศรษฐกิจที่ผสมผสานความเก่าและใหม่ได้อย่างลงตัว',
    content: `
      <h3>ย่านธุรกิจที่มีเสน่ห์</h3>
      <p>บางรักเป็นย่านธุรกิจเก่าแก่ที่ยังคงมีร้านอาหารดั้งเดิมมากมาย เหมาะสำหรับมื้อเช้าและมื้อกลางวัน</p>
      
      <h4>โจ๊กปรินซ์</h4>
      <p>โจ๊กที่ต้มด้วยเตาถ่านจนมีกลิ่นหอมไหม้เล็กๆ เป็นเอกลักษณ์ หมูสับก้อนโตเต็มคำ เปิดมานานกว่า 70 ปี ยังคงรสชาติเดิม</p>
      
      <h4>ประจักษ์เป็ดย่าง</h4>
      <p>เปิดมานานกว่า 100 ปี เป็ดย่างหนังบางกรอบ น้ำราดสูตรลับที่ออกรสหวานเค็มกลมกล่อม ต้องมาตั้งแต่เช้าเพราะหมดเร็วมาก</p>
      
      <h4>ขาหมูตรอกซุง</h4>
      <p>ขาหมูเนื้อหนังนุ่มๆ ราดน้ำพะโล้รสเข้มข้น กินคู่กับพริกน้ำส้มตัดเลี่ยน ร้านเล็กๆ แต่อร่อยมาก</p>
      
      <div class="blog-business-lunch">
        <h4>💼 มื้อกลางวันสำหรับคนทำงาน</h4>
        <p>บางรักมีร้านอาหารมื้อกลางวันมากมาย ราคาไม่แพง เหมาะสำหรับคนทำงานในย่าน ส่วนใหญ่เปิด 10:00-14:00 น.</p>
      </div>
      
      <h4>สถาปัตยกรรมเก่าแก่</h4>
      <p>ย่านบางรักมีอาคารเก่าแก่สวยงามมากมาย เหมาะสำหรับเดินเล่นและถ่ายรูป โดยเฉพาะบริเวณถนนเจริญกรุง</p>
    `,
    location: 'ย่านบางรัก แขวงสีลม เขตบางรัก',
    mapLink: 'https://maps.google.com/?q=Bang+Rak+Bangkok'
  },
  {
    id: 'yotsae-sukiyaki',
    title: 'ถนนยศเส: สุกี้กระทะร้อนและไอติมหม้อไฟ 🍦',
    area: 'ถนนยศเส',
    author: 'อินทิรา',
    date: '30 Dec 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    excerpt: 'ถนนสายสั้นๆ ที่เต็มไปด้วยของอร่อยระดับท็อป',
    content: `
      <h3>ถนนสายอร่อย</h3>
      <p>ถนนยศเสเป็นถนนสายสั้นๆ แต่มีร้านอาหารอร่อยมากมาย เป็นที่นิยมของคนรุ่นใหม่</p>
      
      <h4>เอลวิสสุกี้</h4>
      <p>สุกี้แห้งคั่วกระทะจนหอมกลิ่นไหม้ และหอยเชลล์ทรงเครื่องย่างเนยกระเทียม เมนูเด็ดที่ต้องลอง ราคาไม่แพงแต่คุณภาพดีมาก</p>
      
      <h4>ไอติมหม้อไฟยศเส</h4>
      <p>การนำไอศกรีมโฮมเมดรสแปลกๆ เช่น รสกระทิงแดงวอดก้า เสิร์ฟมาในหม้อไฟพร้อมดรายไอซ์สุดอลังการ เหมาะสำหรับถ่ายรูปโพสต์โซเชียล</p>
      
      <h4>คั่วไก่แอน</h4>
      <p>ก๋วยเตี๋ยวคั่วไก่ที่ใช้ไก่หมักนุ่มๆ คั่วจนเส้นกรอบนอกนุ่มใน ใส่ผักสดเยอะ รสชาติกลมกล่อม</p>
      
      <div class="blog-trendy">
        <h4>📱 ร้านสำหรับโพสต์โซเชียล</h4>
        <p>ถนนยศเสมีร้านอาหารที่เหมาะสำหรับถ่ายรูปมากมาย โดยเฉพาะไอติมหม้อไฟที่เป็นไอคอนของถนนนี้</p>
      </div>
      
      <h4>บรรยากาศ</h4>
      <p>ถนนยศเสมีบรรยากาศสบายๆ เป็นกันเอง มีทั้งร้านอาหารและคาเฟ่ เหมาะสำหรับมาเดินเล่นช่วงเย็น</p>
    `,
    location: 'ถนนยศเส แขวงทุ่งมหาเมฆ เขตสาทร',
    mapLink: 'https://maps.google.com/?q=Yotsae+Road+Bangkok'
  },
  {
    id: 'nang-loeng-traditional',
    title: 'ตลาดนางเลิ้ง: อาหารไทยโบราณที่หาทานยาก 🍛',
    area: 'ตลาดนางเลิ้ง',
    author: 'อินทิรา',
    date: '28 Dec 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80',
    excerpt: 'ตลาดบกแห่งแรกของไทยที่มีเสน่ห์ความคลาสสิกเต็มเปี่ยม',
    content: `
      <h3>ตลาดบกแห่งแรก</h3>
      <p>ตลาดนางเลิ้งเป็นตลาดบกแห่งแรกของไทย มีประวัติยาวนานกว่า 100 ปี มีอาหารไทยโบราณที่หาทานได้ยากในปัจจุบัน</p>
      
      <h4>ไส้กรอกปลาแนม</h4>
      <p>ของว่างโบราณที่หาทานยากมาก รสชาติเปรี้ยว หวาน เค็ม หอมกลิ่นผิวมะนาว ทำตามสูตรโบราณที่ได้รับการถ่ายทอดมาหลายรุ่น</p>
      
      <h4>เนื้อตุ๋นนางเลิ้ง</h4>
      <p>เนื้อเปื่อยชิ้นโตในน้ำซุปยาจีนที่หอมไปทั่วตลาด ต้มนานหลายชั่วโมงจนเนื้อนุ่มละมุน กินคู่กับข้าวสวยร้อนๆ</p>
      
      <h4>ขนมไทยแม่สมจิตต์</h4>
      <p>ตะโก้ ขนมใส่ไส้ และขนมไทยต่างๆ ที่ทำสดใหม่ทุกวันตามสูตรดั้งเดิม ใช้วัตถุดิบคุณภาพดี ไม่ใส่สีและกลิ่นเทียม</p>
      
      <div class="blog-heritage">
        <h4>🏛️ มรดกทางวัฒนธรรม</h4>
        <p>ตลาดนางเลิ้งได้รับการขึ้นทะเบียนเป็นมรดกทางวัฒนธรรม เป็นตลาดที่ยังคงรักษาบรรยากาศแบบดั้งเดิมไว้ได้ดี</p>
      </div>
      
      <h4>สถาปัตยกรรม</h4>
      <p>ตลาดมีสถาปัตยกรรมแบบไทยผสมจีน อาคารไม้เก่าแก่ที่ยังคงใช้งานได้ เหมาะสำหรับคนรักสถาปัตยกรรมโบราณ</p>
    `,
    location: 'ถนนนครสวรรค์ แขวงวัดโสมนัส เขตป้อมปราบศัตรูพ่าย',
    mapLink: 'https://maps.google.com/?q=Nang+Loeng+Market+Bangkok'
  },
  {
    id: 'khao-san-rambutri',
    title: 'ข้าวสาร & รามบุตรี: มากกว่าแค่ที่ปาร์ตี้ 🍢',
    area: 'ข้าวสาร-รามบุตรี',
    author: 'อินทิรา',
    date: '26 Dec 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    excerpt: 'แหล่งรวมอาหาร Street Food ที่ตอบโจทย์ทั้งชาวไทยและชาวต่างชาติ',
    content: `
      <h3>ย่านนักท่องเที่ยว</h3>
      <p>ข้าวสารและรามบุตรีเป็นย่านที่มีชื่อเสียงในหมู่นักท่องเที่ยว แต่ก็มีอาหารอร่อยมากมายที่คนไทยก็ชอบกิน</p>
      
      <h4>ต้มยำกุ้งบางลำพู</h4>
      <p>ตั้งอยู่หัวมุมถนน รสชาติต้มยำน้ำข้นแบบถึงเครื่องสมุนไพร กุ้งตัวใหญ่สะใจ ราคาไม่แพงเมื่อเทียบกับคุณภาพ</p>
      
      <h4>โรตีหน้าเพาะช่าง</h4>
      <p>โรตีใส่ไข่ ใส่กล้วย หรือโรตีธรรมดาราดนมข้นหวานที่ทำมาได้กรอบนุ่มกำลังดี เปิดจนดึก เหมาะสำหรับมื้อดึก</p>
      
      <h4>Pad Thai Thip Samai</h4>
      <p>ถึงจะอยู่เลยไปทางสำราญราษฎร์นิดหน่อย แต่คือจุดหมายที่คนรักผัดไทยต้องไป ผัดไทยห่อไข่ที่มีชื่อเสียงระดับโลก</p>
      
      <div class="blog-tourist-friendly">
        <h4>🌍 เป็นมิตรกับนักท่องเที่ยว</h4>
        <p>ร้านอาหารในย่านนี้ส่วนใหญ่มีเมนูภาษาอังกฤษ พนักงานพูดภาษาอังกฤษได้ เหมาะสำหรับพาเพื่อนต่างชาติมา</p>
      </div>
      
      <h4>บรรยากาศกลางคืน</h4>
      <p>ย่านนี้มีชีวิตชีวาที่สุดช่วงกลางคืน มีทั้งร้านอาหาร บาร์ และร้านนวดเปิดจนดึก บรรยากาศสนุกสนานและปลอดภัย</p>
    `,
    location: 'ถนนข้าวสาร-รามบุตรี แขวงชนะสงคราม เขตพระนคร',
    mapLink: 'https://maps.google.com/?q=Khao+San+Road+Bangkok'
  },
  {
    id: 'or-tor-kor-premium',
    title: 'ตลาด อ.ต.ก.: สตรีทฟู้ดระดับพรีเมียม 🥗',
    area: 'ตลาด อ.ต.ก.',
    author: 'อินทิรา',
    date: '24 Dec 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    excerpt: 'ถ้าอยากกินของอร่อยที่คัดคุณภาพเน้นๆ ต้องมาที่นี่',
    content: `
      <h3>ตลาดระดับพรีเมียม</h3>
      <p>ตลาด อ.ต.ก. เป็นตลาดที่มีชื่อเสียงในเรื่องคุณภาพของสินค้า ทุกอย่างผ่านการคัดสรรมาอย่างดี</p>
      
      <h4>น้ำพริกหนุ่มวาสนา</h4>
      <p>น้ำพริกหนุ่มรสเผ็ดกำลังดี กินคู่กับไส้อั่วและแคบหมูเกรดเอ ทำสดใหม่ทุกวัน ไม่ใส่สารกันบูด</p>
      
      <h4>ทุเรียนคัดเกรด</h4>
      <p>สำหรับสายเปย์ที่อยากกินทุเรียนหมอนทองหรือก้านยาวที่รสชาติสมบูรณ์แบบที่สุด ราคาแพงแต่คุ้มค่า</p>
      
      <h4>หมูทอดชาววัง</h4>
      <p>หมูทอดนุ่มๆ ที่มีรสชาติหวานเค็มลงตัว กินกับข้าวเหนียวร้อนๆ คือที่สุด ทำตามสูตรโบราณของชาววัง</p>
      
      <div class="blog-premium">
        <h4>⭐ คุณภาพระดับพรีเมียม</h4>
        <p>ตลาด อ.ต.ก. มีการควบคุมคุณภาพอย่างเข้มงวด ทุกร้านค้าต้องผ่านมาตรฐาน ทำให้มั่นใจได้ในความสะอาดและความปลอดภัย</p>
      </div>
      
      <h4>สิ่งอำนวยความสะดวก</h4>
      <p>ตลาดมีที่จอดรถกว้างขวาง ห้องน้ำสะอาด และมีแอร์เย็นสบาย เหมาะสำหรับมาช้อปปิ้งทั้งครอบครัว</p>
    `,
    location: 'ถนนกำแพงเพชร 2 แขวงจตุจักร เขตจตุจักร',
    mapLink: 'https://maps.google.com/?q=Or+Tor+Kor+Market+Bangkok'
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
