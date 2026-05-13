# GAPKHAO Quick Reference Card

## 🚀 Quick Start

### Open Pages
- **Street Food:** `street-food.html`
- **Explore:** `explore.html`
- **Home:** `index.html`

### Key Files
- `js/street-food.js` - Street Food page logic
- `js/explore-new.js` - Explore page logic
- `js/language-switcher-cn.js` - Language switching
- `css/street-food.css` - Street Food styles
- `css/explore-new.css` - Explore styles

---

## 📊 Data Overview

### Restaurants: 40 Total
- **IDs 1-4:** Original locations
- **IDs 5-40:** New locations from Street Food page

### Each Location Has
```javascript
{
  id: 1,
  title: 'Thai Name',
  titleZh: 'Chinese Name',
  lat: 13.7563,
  lng: 100.5018,
  rating: 3.9,
  address: 'Full address',
  addressZh: '完整地址',
  phone: '02-2264651',
  hours: 'เปิดอยู่จนถึง 23:59',
  hoursZh: '营业至 23:59',
  images: [4 image URLs],
  transport: [2-3 transport options]
}
```

---

## 🔗 Integration Flow

### Street Food → Explore
```
1. User clicks food card
2. Modal opens with details
3. User clicks "ดูในหน้า Explore →"
4. goToExplore(lat, lng) called
5. Coordinates stored in sessionStorage
6. Redirected to explore.html
7. Auto-selection logic finds matching location
8. Restaurant auto-selected and displayed
```

### Key Functions
- `goToExplore(lat, lng)` - Initiates navigation
- `selectLocation(index)` - Selects restaurant on Explore page
- `applyTranslations(lang)` - Applies language translations

---

## 🌐 Language Support

### Supported Languages
- **Thai (th)** - Default
- **Chinese (zh)** - Simplified Chinese

### Translation Keys
```javascript
// Categories
'category.main': 'อาหารจานหลัก' / '主菜'
'category.dessert': 'ของหวาน' / '甜点'
'category.snack': 'ของกินเล่น' / '小吃'
'category.noodle': 'อาหารเส้น' / '面食'

// Explore
'explore.searchPlaceholder': 'ค้นหาสถานที่...' / '搜索地点...'
```

### How to Add Translation
1. Add key to `translations` object in `language-switcher-cn.js`
2. Add `data-translate="key"` to HTML element
3. Or use `data-translate-placeholder="key"` for input placeholders

---

## 🔍 Search Functionality

### Search Works With
- Thai restaurant names
- English restaurant names
- Chinese restaurant names
- Area names (Thai or Chinese)

### Example Searches
- "ก๋วยจั๊บ" → Shows rolled noodle restaurants
- "Pad Thai" → Shows Pad Thai restaurants
- "เยาวราช" → Shows all Yaowarat restaurants
- "Yaowarat" → Shows all Yaowarat restaurants

---

## 🗺️ Map & Coordinates

### Coordinate System
- **Format:** Latitude, Longitude
- **Example:** 13.7563, 100.5018 (Bangkok center)
- **Matching Tolerance:** 0.0001 degrees (≈ 11 meters)

### Map Library
- **Library:** Leaflet.js
- **CDN:** unpkg.com/leaflet@1.9.4
- **Container ID:** `map`

---

## 🎨 Styling

### CSS Files
- `css/style.css` - Global styles
- `css/street-food.css` - Street Food page
- `css/explore-new.css` - Explore page
- `css/language-switcher-cn.css` - Language switcher

### Key Classes
- `.location-card` - Restaurant card
- `.location-modal` - Detail modal
- `.category-tab` - Category button
- `.search-box` - Search input
- `.detail-panel` - Detail panel

---

## 🐛 Debugging Tips

### Check Console
```javascript
// View current language
window.currentLanguage()

// View all locations
locationsData

// View sessionStorage
sessionStorage.getItem('exploreLocationLat')
sessionStorage.getItem('exploreLocationLng')

// Test coordinate matching
Math.abs(13.7501 - 13.7501) < 0.0001 // true
```

### Common Issues
| Issue | Solution |
|-------|----------|
| Restaurant not auto-selecting | Check sessionStorage, verify coordinates |
| Language not switching | Check data-translate attributes, clear cache |
| Search not working | Check search input ID, verify data |
| Map not displaying | Check Leaflet library loaded, verify container |

---

## 📱 Responsive Breakpoints

### Desktop
- Width: 1920px+
- Layout: Sidebar + Map side-by-side

### Tablet
- Width: 768px - 1024px
- Layout: Stacked or adjusted

### Mobile
- Width: < 768px
- Layout: Full-width stacked

---

## ✅ Testing Checklist

### Quick Test (5 minutes)
- [ ] Street Food page loads
- [ ] Click food card → modal opens
- [ ] Click "ดูในหน้า Explore" → redirects
- [ ] Restaurant auto-selects on Explore
- [ ] Language switch works

### Full Test (30 minutes)
- [ ] All 40 restaurants visible
- [ ] Search works (Thai, English, Area)
- [ ] Map displays and pans
- [ ] Language switching complete
- [ ] No console errors
- [ ] Responsive on mobile

---

## 🚀 Deployment

### Before Push to GitHub
1. Run tests (see TESTING-GUIDE.md)
2. Check console for errors
3. Verify all 40 restaurants
4. Test on multiple browsers
5. Get approval

### GitHub Commands
```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "feat: Street Food to Explore integration"

# Push
git push origin main
```

---

## 📞 Support

### Documentation Files
- `IMPLEMENTATION-SUMMARY.md` - Full implementation details
- `TESTING-GUIDE.md` - Comprehensive testing guide
- `STREETFOOD-EXPLORE-INTEGRATION.md` - Integration details
- `QUICK-REFERENCE.md` - This file

### Key Contacts
- Developer: [Your Name]
- Date: May 13, 2026
- Version: 1.0

---

## 🎯 Success Criteria

✅ 40 restaurants total  
✅ Street Food → Explore navigation works  
✅ Auto-selection by coordinates works  
✅ Language switching works (Thai/Chinese)  
✅ Search functionality works  
✅ No console errors  
✅ Responsive design works  
✅ All tests pass  

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| Total Restaurants | 40 |
| Languages | 2 |
| Files Modified | 5 |
| Translation Keys | 10+ |
| Test Cases | 50+ |
| Documentation Pages | 4 |

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 13, 2026 | Initial implementation |

---

**Last Updated:** May 13, 2026  
**Status:** ✅ READY FOR TESTING  
**Next Step:** Run TESTING-GUIDE.md tests

