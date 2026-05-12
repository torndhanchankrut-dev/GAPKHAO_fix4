/* ══════════════════════════════════════════════════════════════
   STREET LIFE STORIES - Modal System JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Story Data
const storiesData = {
  'fried-rice-legend': {
    category: 'Food',
    categoryZh: '美食',
    title: 'แม่ค้าข้าวผัดตำนานย่านเยาวราช',
    titleZh: '耀华力传奇炒饭摊',
    subtitle: 'The Legendary Fried Rice Vendor of Yaowarat',
    subtitleZh: '耀华力传奇炒饭摊',
    intro: 'เปิดมา 30 ปี ยังคงรสชาติเดิม ร้านข้าวผัดเล็กๆ ที่กลายเป็นตำนานของย่านเยาวราช',
    introZh: '开业30年，味道始终如一，这家小炒饭摊已成为耀华力的传奇',
    heroImage: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=1200&q=80',
    sections: [
      {
        title: 'ประวัติความเป็นมา',
        titleZh: '历史由来',
        content: 'แม่ค้าข้าวผัดรายนี้เริ่มต้นจากรถเข็นเล็กๆ เมื่อ 30 ปีที่แล้ว ด้วยสูตรข้าวผัดที่ได้รับการถ่ายทอดมาจากคุณยาย ทุกวันนี้ยังคงใช้วิธีการทำแบบดั้งเดิม ไฟแรง กระทะร้อน และความใส่ใจในทุกจาน\n\nจุดเด่นของข้าวผัดที่นี่คือการใช้ข้าวหอมมะลิที่หุงสดใหม่ทุกวัน ผัดด้วยไฟแรงจนเกิดกลิ่นหอมของข้าวคั่ว ปรุงรสด้วยซีอิ๊วดำคุณภาพดี และใส่ไข่ไก่ฟองใหญ่ที่ตีจนฟู ทำให้ข้าวผัดมีเนื้อสัมผัสที่นุ่มฟู หอม และอร่อยไม่เหมือนใคร',
        contentZh: '这位炒饭摊主30年前从一辆小推车开始，使用祖母传下来的炒饭秘方。至今仍坚持传统做法：大火快炒，热锅翻炒，每一盘都用心制作。\n\n这里炒饭的特色是使用每天新鲜煮的茉莉香米，用大火炒至米饭散发焦香，用优质老抽调味，加入打发的大鸡蛋，使炒饭口感松软、香气四溢、美味独特。'
      },
      {
        title: 'เคลับลับความอร่อย',
        titleZh: '美味秘诀',
        content: 'ความลับของความอร่อยอยู่ที่การเลือกใช้วัตถุดิบคุณภาพดี ข้าวหอมมะลิเกรดพรีเมียม ไข่ไก่ฟองใหญ่จากฟาร์มที่คัดสรร และซีอิ๊วดำที่หมักมานานกว่า 2 ปี\n\nนอกจากนี้ยังมีเทคนิคการผัดที่สำคัญ คือการใช้ไฟแรงมากๆ และกระทะที่ร้อนจัด ทำให้ข้าวไม่เละ แต่แห้งกรอบและหอม การผัดแต่ละจานใช้เวลาไม่เกิน 3 นาที เพื่อรักษาความสดและกลิ่นหอมของข้าว',
        contentZh: '美味的秘诀在于选用优质食材：高级茉莉香米、精选农场的大鸡蛋、以及陈酿超过2年的老抽。\n\n此外还有重要的炒制技巧：使用极大的火力和滚烫的锅，使米饭不粘不烂，干爽香脆。每盘炒饭的制作时间不超过3分钟，以保持米饭的新鲜和香气。'
      }
    ],
    quote: {
      text: 'ทุกจานที่ผัดออกไป คือความภาคภูมิใจของฉัน ฉันไม่เคยลดคุณภาพ แม้จะต้องขายในราคาที่ถูกกว่าร้านอื่น เพราะฉันอยากให้ทุกคนได้กินข้าวผัดที่อร่อยจริงๆ',
      textZh: '每一盘炒出来的饭都是我的骄傲。我从不降低质量，即使价格比其他店便宜，因为我希望每个人都能吃到真正美味的炒饭。',
      author: 'แม่ค้าข้าวผัด อายุ 65 ปี',
      authorZh: '炒饭摊主，65岁'
    },
    highlights: [
      { icon: '🍚', label: 'เปิดมา', labelZh: '开业', value: '30 ปี', valueZh: '30年' },
      { icon: '⭐', label: 'คะแนนเฉลี่ย', labelZh: '平均评分', value: '4.8/5.0', valueZh: '4.8/5.0' },
      { icon: '👥', label: 'ลูกค้าต่อวัน', labelZh: '每日顾客', value: '200+ คน', valueZh: '200+人' },
      { icon: '💰', label: 'ราคา', labelZh: '价格', value: '50-80 บาท', valueZh: '50-80泰铢' }
    ],
    mapText: 'ตั้งอยู่ที่ซอยเยาวราช 11 เปิดทุกวัน 17:00-23:00 น.',
    mapTextZh: '位于耀华力巷11号，每天17:00-23:00营业'
  },

  'temple-alley': {
    category: 'Culture',
    title: 'ซอยวัดกลางเมือง',
    subtitle: 'Temple Alley in the Heart of the City',
    intro: 'ซอยเล็กๆ ที่ซ่อนตัวอยู่ท่ามกลางตึกสูง เป็นพื้นที่ที่ผสมผสานระหว่างความศักดิ์สิทธิ์ของวัดเก่าแก่กับชีวิตประจำวันของชาวบ้าน',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    sections: [
      {
        title: 'ประวัติศาสตร์ของซอย',
        content: 'ซอยแห่งนี้มีอายุกว่า 150 ปี เริ่มต้นจากการที่ชาวบ้านสร้างวัดเล็กๆ เพื่อเป็นศูนย์รวมจิตใจของชุมชน ต่อมาได้มีการขยายตัวเป็นชุมชนที่มีบ้านเรือนและร้านค้าเล็กๆ ตั้งอยู่รอบวัด\n\nแม้กรุงเทพจะเปลี่ยนแปลงไปมาก แต่ซอยแห่งนี้ยังคงรักษาบรรยากาศแบบดั้งเดิมไว้ได้ มีบ้านไม้เก่าแก่ ร้านขายของชำที่เปิดมาตั้งแต่รุ่นปู่ย่าตายาย และวัดที่ยังคงเป็นศูนย์กลางของชุมชน'
      },
      {
        title: 'ชีวิตประจำวันในซอย',
        content: 'ทุกเช้าจะมีชาวบ้านมาทำบุญที่วัด พระสงฆ์ออกบิณฑบาตตามซอย และร้านขายอาหารเช้าเริ่มเปิดให้บริการ กลางวันซอยจะเงียบสงบ มีเพียงเสียงสวดมนต์จากวัดและเสียงนักเรียนเล่นในโรงเรียนใกล้เคียง\n\nตอนเย็นซอยจะมีชีวิตชีวาอีกครั้ง ชาวบ้านกลับจากทำงาน เด็กๆ วิ่งเล่นตามซอย และร้านอาหารเย็นเริ่มเปิดให้บริการ บรรยากาศอบอุ่นและเป็นกันเองมาก'
      }
    ],
    quote: {
      text: 'ซอยนี้เหมือนครอบครัวใหญ่ ทุกคนรู้จักกัน ช่วยเหลือกัน เวลามีงานบุญที่วัด ทุกคนจะมาช่วยกันจัดงาน นี่คือสิ่งที่หาได้ยากในกรุงเทพยุคนี้',
      author: 'ผู้อาศัยในซอยมากกว่า 40 ปี'
    },
    highlights: [
      { icon: '🏛️', label: 'อายุวัด', value: '150+ ปี' },
      { icon: '🏠', label: 'จำนวนครัวเรือน', value: '80 ครัวเรือน' },
      { icon: '🙏', label: 'พิธีกรรมประจำปี', value: '12 งาน' },
      { icon: '🌳', label: 'ต้นไม้ใหญ่', value: '5 ต้น' }
    ],
    mapText: 'ตั้งอยู่ใกล้สถานี BTS สนามกีฬาแห่งชาติ เดินเข้าซอยประมาณ 200 เมตร'
  },

  'street-murals': {
    category: 'Art',
    title: 'จิตรกรรมฝาผนังซอย',
    subtitle: 'Street Wall Murals',
    intro: 'ศิลปะบนกำแพงที่เล่าเรื่องราวของชุมชน สะท้อนวิถีชีวิตและวัฒนธรรมท้องถิ่นผ่านสีสันและลวดลาย',
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    sections: [
      {
        title: 'ที่มาของโครงการ',
        content: 'โครงการจิตรกรรมฝาผนังซอยเริ่มต้นจากความร่วมมือระหว่างศิลปินท้องถิ่นและชุมชน เพื่อฟื้นฟูและสร้างสีสันให้กับซอยเก่าที่เริ่มทรุดโทรม โดยใช้ศิลปะเป็นสื่อในการเล่าเรื่องราวของชุมชน\n\nศิลปินได้สัมภาษณ์ผู้อาศัยในชุมชนเพื่อรวบรวมเรื่องราว ความทรงจำ และวัฒนธรรมท้องถิ่น จากนั้นนำมาถ่ายทอดผ่านภาพวาดบนกำแพง ทำให้ทุกภาพมีความหมายและเชื่อมโยงกับชุมชนอย่างแท้จริง'
      },
      {
        title: 'ความหมายของภาพวาด',
        content: 'ภาพวาดแต่ละภาพเล่าเรื่องราวที่แตกต่างกัน บางภาพแสดงถึงอาชีพดั้งเดิมของชุมชน เช่น ช่างทอผ้า ช่างทำขนม บางภาพแสดงถึงเทศกาลและประเพณีสำคัญ เช่น สงกรานต์ ลอยกระทง\n\nสีสันที่ใช้ก็มีความหมาย สีอบอุ่นแทนความรักและความผูกพันของชุมชน สีสดใสแทนความหวังและอนาคต ส่วนลวดลายไทยที่ปรากฏในภาพแสดงถึงรากเหง้าทางวัฒนธรรม'
      }
    ],
    quote: {
      text: 'ภาพวาดเหล่านี้ไม่ใช่แค่ศิลปะ แต่เป็นเรื่องราวของเรา ของคนในชุมชน ทุกครั้งที่เดินผ่าน ฉันรู้สึกภูมิใจที่ได้เป็นส่วนหนึ่งของที่นี่',
      author: 'ศิลปินท้องถิ่น'
    },
    highlights: [
      { icon: '🎨', label: 'จำนวนภาพวาด', value: '25 ภาพ' },
      { icon: '👨‍🎨', label: 'ศิลปินที่ร่วมงาน', value: '12 คน' },
      { icon: '📏', label: 'พื้นที่รวม', value: '500 ตร.ม.' },
      { icon: '📅', label: 'ระยะเวลาทำงาน', value: '6 เดือน' }
    ],
    mapText: 'ตั้งอยู่ที่ซอยเจริญกรุง 30 เปิดให้เข้าชมได้ตลอดเวลา'
  },

  'night-market': {
    category: 'Food',
    title: 'ตลาดกลางคืนบรรยากาศดี',
    subtitle: 'Night Market with Great Atmosphere',
    intro: 'ตลาดกลางคืนที่มีมากกว่าแค่อาหาร แต่เป็นพื้นที่แห่งการพบปะ แลกเปลี่ยน และสร้างความทรงจำ',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
    sections: [
      {
        title: 'บรรยากาศของตลาด',
        content: 'ตลาดกลางคืนแห่งนี้เปิดทุกวันศุกร์-อาทิตย์ ตั้งแต่ 17:00-23:00 น. บรรยากาศอบอุ่นด้วยแสงไฟสีเหลืองอำพัน เสียงเพลงไทยเบาๆ และกลิ่นหอมของอาหารนานาชนิด\n\nที่นี่ไม่ใช่แค่ตลาดธรรมดา แต่เป็นพื้นที่ชุมชนที่ผู้คนมาพบปะกัน มีทั้งครอบครัวที่มาทานอาหารเย็นร่วมกัน กลุ่มเพื่อนที่มานั่งคุยกัน และนักท่องเที่ยวที่มาสัมผัสบรรยากาศของตลาดไทยแท้ๆ'
      },
      {
        title: 'อาหารและของกิน',
        content: 'ตลาดมีร้านอาหารมากกว่า 50 ร้าน ตั้งแต่อาหารไทยดั้งเดิม อาหารฟิวชั่น ไปจนถึงขนมหวานและเครื่องดื่ม ทุกร้านใช้วัตถุดิบสดใหม่และทำสดใหม่ทุกวัน\n\nเมนูแนะนำ ได้แก่ ส้มตำปูปลาร้า ข้าวซอยไก่ กุ้งแม่น้ำเผา ขนมครกใบเตย และชาไทยโบราณ ราคาอยู่ในระดับ 40-150 บาท เหมาะกับทุกกระเป๋าเงิน'
      }
    ],
    quote: {
      text: 'ตลาดนี้เหมือนบ้านหลังที่สอง ฉันมาที่นี่ทุกสัปดาห์ ไม่ใช่แค่เพื่อกินอาหาร แต่เพื่อพบเพื่อนเก่า ทำความรู้จักกับคนใหม่ และรู้สึกเป็นส่วนหนึ่งของชุมชน',
      author: 'ลูกค้าประจำมากกว่า 5 ปี'
    },
    highlights: [
      { icon: '🍜', label: 'จำนวนร้านอาหาร', value: '50+ ร้าน' },
      { icon: '👥', label: 'ผู้เข้าชมต่อวัน', value: '1,000+ คน' },
      { icon: '⏰', label: 'เวลาเปิด', value: 'ศุกร์-อาทิตย์ 17:00-23:00' },
      { icon: '🎵', label: 'ดนตรีสด', value: 'ทุกวันเสาร์' }
    ],
    mapText: 'ตั้งอยู่ที่ถนนรัชดาภิเษก ซอย 4 ใกล้สถานี MRT สุทธิสาร'
  },

  'bangkok-after-dark': {
    category: 'City',
    title: 'Bangkok After Dark',
    subtitle: 'The City That Never Sleeps',
    intro: 'ค้นพบเสน่ห์ของกรุงเทพยามค่ำคืน เมื่อแสงไฟสว่างไสว และเมืองเริ่มมีชีวิตในอีกรูปแบบหนึ่ง',
    heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80',
    theme: 'dark',
    sections: [
      {
        title: 'กรุงเทพยามค่ำคืน',
        content: 'เมื่อพระอาทิตย์ตกดิน กรุงเทพก็เริ่มต้นชีวิตในอีกรูปแบบหนึ่ง แสงไฟจากตึกสูงสะท้อนกับแม่น้ำเจ้าพระยา ถนนที่เงียบสงบกลางวันกลับมีชีวิตชีวาด้วยตลาดกลางคืนและร้านอาหารริมทาง\n\nกรุงเทพยามค่ำคืนมีเสน่ห์เฉพาะตัว ไม่ว่าจะเป็นบรรยากาศของร้านอาหารริมแม่น้ำ ตลาดนัดกลางคืนที่คึกคัก หรือบาร์บนดาดฟ้าที่มองเห็นวิวเมืองทั้งหมด'
      },
      {
        title: 'จุดชมวิวยามค่ำคืน',
        content: 'กรุงเทพมีจุดชมวิวยามค่ำคืนมากมาย ตั้งแต่ Rooftop Bar บนตึกสูง ที่สามารถมองเห็นแสงไฟของเมืองทั้งหมด ไปจนถึงริมแม่น้ำเจ้าพระยาที่สามารถนั่งเรือชมวิวได้\n\nแต่ละจุดมีเสน่ห์ที่แตกต่างกัน บางที่เหมาะกับการมาคนเดียวนั่งชิล บางที่เหมาะกับการมากับเพื่อนๆ และบางที่เหมาะกับการมากับคนพิเศษ'
      },
      {
        title: 'อาหารริมทางยามดึก',
        content: 'หนึ่งในเสน่ห์ของกรุงเทพยามค่ำคืนคืออาหารริมทางที่เปิดจนดึก ไม่ว่าจะเป็นข้าวมันไก่ ก๋วยเตี๋ยวเรือ หรือขนมหวานไทย ล้วนพร้อมให้บริการตลอด 24 ชั่วโมง\n\nร้านอาหารเหล่านี้ไม่ใช่แค่ที่ๆ คุณมาหาอะไรกิน แต่เป็นพื้นที่ที่ผู้คนจากทุกสาขาอาชีพมาพบปะกัน ไม่ว่าจะเป็นคนทำงานกะดึก แท็กซี่ หรือคนที่ออกมาเที่ยวกลางคืน'
      }
    ],
    quote: {
      text: 'กรุงเทพยามค่ำคืนมีเสน่ห์ที่ไม่เหมือนใคร เมืองนี้ไม่เคยหลับ มีชีวิตตลอด 24 ชั่วโมง และนั่นคือสิ่งที่ทำให้กรุงเทพพิเศษ',
      author: 'ช่างภาพท้องถิ่น'
    },
    highlights: [
      { icon: '🌃', label: 'Rooftop Bars', value: '50+ แห่ง' },
      { icon: '🍜', label: 'ร้านอาหารเปิด 24 ชม.', value: '200+ ร้าน' },
      { icon: '🚕', label: 'แท็กซี่วิ่งกลางคืน', value: '10,000+ คัน' },
      { icon: '🎭', label: 'กิจกรรมกลางคืน', value: 'ไม่มีวันหยุด' }
    ],
    mapText: 'สำรวจกรุงเทพยามค่ำคืนได้ทุกย่าน แต่ละย่านมีเสน่ห์ที่แตกต่างกัน'
  }
};

// Modal Management
class StoryModal {
  constructor() {
    this.overlay = null;
    this.currentStory = null;
    this.init();
  }

  init() {
    // Create modal overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'story-modal-overlay';
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

    // Add click handlers to all story cards
    this.attachCardHandlers();
  }

  attachCardHandlers() {
    const cards = document.querySelectorAll('.street-card');
    cards.forEach((card, index) => {
      const storyIds = [
        'fried-rice-legend',
        'temple-alley',
        'street-murals',
        'night-market',
        'bangkok-after-dark'
      ];
      
      card.setAttribute('data-story-id', storyIds[index]);
      card.addEventListener('click', () => {
        // Get the image from the clicked card
        const cardImage = card.querySelector('img');
        const imageSrc = cardImage ? cardImage.src : null;
        
        this.open(storyIds[index], imageSrc);
      });
    });
  }

  open(storyId, cardImageSrc = null) {
    const story = storiesData[storyId];
    if (!story) return;

    // Use card image if provided, otherwise use default
    if (cardImageSrc) {
      story.heroImage = cardImageSrc;
    }

    this.currentStory = story;
    this.render(story);
    
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

  render(story) {
    const themeClass = story.theme === 'dark' ? 'theme-dark' : '';
    
    // Get current language
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    // Use Chinese translations if available and language is Chinese
    const category = (currentLang === 'zh' && story.categoryZh) ? story.categoryZh : story.category;
    const title = (currentLang === 'zh' && story.titleZh) ? story.titleZh : story.title;
    const subtitle = (currentLang === 'zh' && story.subtitleZh) ? story.subtitleZh : story.subtitle;
    const intro = (currentLang === 'zh' && story.introZh) ? story.introZh : story.intro;
    
    const modalHTML = `
      <div class="story-modal ${themeClass}">
        <button class="story-close-btn" aria-label="Close story">✕</button>
        
        <!-- Hero Section -->
        <div class="story-hero">
          <img src="${story.heroImage}" alt="${title}" class="story-hero-image" />
          <div class="story-hero-overlay">
            <span class="story-category-badge">${category}</span>
            <h1 class="story-title">${title}</h1>
            <p class="story-subtitle">${subtitle}</p>
            <p class="story-intro">${intro}</p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="story-content">
          ${story.sections.map(section => {
            const sectionTitle = (currentLang === 'zh' && section.titleZh) ? section.titleZh : section.title;
            const sectionContent = (currentLang === 'zh' && section.contentZh) ? section.contentZh : section.content;
            return `
            <div class="story-section">
              <h2 class="story-section-title">${sectionTitle}</h2>
              <div class="story-section-content">${sectionContent.replace(/\n\n/g, '</p><p>')}</div>
            </div>
          `;
          }).join('')}

          <!-- Quote Section -->
          <div class="story-quote">
            <p class="story-quote-text">${(currentLang === 'zh' && story.quote.textZh) ? story.quote.textZh : story.quote.text}</p>
            <p class="story-quote-author">— ${(currentLang === 'zh' && story.quote.authorZh) ? story.quote.authorZh : story.quote.author}</p>
          </div>

          <!-- Highlights Section -->
          <div class="story-highlights">
            <h3 class="story-highlights-title">${currentLang === 'zh' ? '重要信息' : 'ข้อมูลสำคัญ'}</h3>
            <div class="story-highlights-grid">
              ${story.highlights.map(item => {
                const label = (currentLang === 'zh' && item.labelZh) ? item.labelZh : item.label;
                const value = (currentLang === 'zh' && item.valueZh) ? item.valueZh : item.value;
                return `
                <div class="story-highlight-item">
                  <div class="story-highlight-icon">${item.icon}</div>
                  <div class="story-highlight-label">${label}</div>
                  <div class="story-highlight-value">${value}</div>
                </div>
              `;
              }).join('')}
            </div>
          </div>

          <!-- Map Section -->
          <div class="story-map-section">
            <h3 class="story-map-title">📍 ${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</h3>
            <div class="story-map-placeholder">
              <div class="story-map-icon">🗺️</div>
              <p class="story-map-text">${(currentLang === 'zh' && story.mapTextZh) ? story.mapTextZh : story.mapText}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    this.overlay.innerHTML = modalHTML;

    // Add close button handler
    const closeBtn = this.overlay.querySelector('.story-close-btn');
    closeBtn.addEventListener('click', () => this.close());
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new StoryModal();
  });
} else {
  new StoryModal();
}
