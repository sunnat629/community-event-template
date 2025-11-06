# 🎯 Mode Selection Guide

## Choosing Between Lite and Pro Mode

This guide helps you decide which architecture mode is best for your event.

---

## 📊 Quick Decision Tool

Answer these questions:

1. **How long is your event?**
    - [ ] 3-8 hours (single day) → **Lite Mode**
    - [ ] 1-3+ days → **Pro Mode**

2. **How many speakers?**
    - [ ] 5-10 speakers → **Lite Mode**
    - [ ] 20+ speakers → **Pro Mode**

3. **How many parallel tracks?**
    - [ ] Single track → **Lite Mode**
    - [ ] 2+ parallel tracks → **Pro Mode**

4. **How many sessions?**
    - [ ] <15 sessions → **Lite Mode**
    - [ ] 30+ sessions → **Pro Mode**

5. **Expected attendees?**
    - [ ] 50-200 → **Lite Mode**
    - [ ] 200+ → **Pro Mode**

**Result:** If you answered **3+ Pro Mode**, use **Pro Mode**. Otherwise, **Lite Mode** is perfect!

---

## 🎈 Lite Mode: Single-Page Architecture

### Best For

- ✅ **Local Meetups** - Monthly community gatherings
- ✅ **Workshops** - Half-day or full-day training sessions
- ✅ **User Group Events** - Quarterly meetups
- ✅ **Small Conferences** - Single-track, single-day events
- ✅ **Launch Events** - Product launches, demos

### Characteristics

| Aspect | Details |
|--------|---------|
| **Duration** | 3-8 hours (single day) |
| **Speakers** | 5-10 |
| **Sessions** | 5-15 |
| **Tracks** | 1 (single track) |
| **Attendees** | 50-200 |
| **Setup Time** | 2-4 hours |
| **Maintenance** | Low |

### Advantages

✅ **Simple Setup** - Configure once, deploy fast  
✅ **Easy Navigation** - One page, smooth scroll  
✅ **Mobile Optimized** - Perfect scrolling experience  
✅ **Fast Loading** - Single bundle, quick load  
✅ **SEO Friendly** - One URL, easy to share  
✅ **Lower Maintenance** - Fewer pages to manage

### Use Cases

#### Example 1: Local Flutter Meetup

- **Duration:** 4 hours (6 PM - 10 PM)
- **Speakers:** 3 speakers + 2 lightning talks
- **Attendees:** 75
- **Venue:** Co-working space
- **Mode:** **Lite** ✅

#### Example 2: React Workshop

- **Duration:** 6 hours (10 AM - 4 PM)
- **Speakers:** 2 instructors + 1 guest speaker
- **Sessions:** Workshop + Q&A
- **Attendees:** 100
- **Mode:** **Lite** ✅

#### Example 3: GDG Community Day

- **Duration:** 8 hours (9 AM - 5 PM)
- **Speakers:** 8 speakers
- **Sessions:** 10 talks + 2 panels
- **Attendees:** 150
- **Mode:** **Lite** ✅

### Configuration

```typescript
// src/config/site.config.ts
export const siteConfig: SiteConfig = {
  eventMode: {
    mode: 'lite',
    scale: {
      duration: 'single-day',
      durationHours: 6,
      speakerCount: 8,
      sessionCount: 10,
      parallelTracks: 1,
      expectedAttendees: 150,
    },
    features: {
      dedicatedSpeakerPages: false,
      sessionDetailPages: false,
      personalizedAgenda: false,
      liveEventDashboard: false,
      attendeeNetworking: false,
      multiDaySchedule: false,
    },
  },
};
```

---

## 🚀 Pro Mode: Multi-Route Architecture

### Best For

- ✅ **Large Conferences** - KotlinConf, FlutterCon style events
- ✅ **Multi-day Summits** - 2-3 day technical conferences
- ✅ **Developer Festivals** - Week-long events
- ✅ **Multi-track Events** - Parallel sessions
- ✅ **International Events** - 200+ attendees

### Characteristics

| Aspect | Details |
|--------|---------|
| **Duration** | 1-3+ days |
| **Speakers** | 20-100+ |
| **Sessions** | 30-200+ |
| **Tracks** | 2-5 parallel tracks |
| **Attendees** | 200-5000+ |
| **Setup Time** | 1-2 days |
| **Maintenance** | Medium-High |

### Advantages

✅ **Scalable** - Handles 100+ speakers easily  
✅ **Better SEO** - Multiple pages, more entry points  
✅ **Shareable** - Direct links to speakers/sessions  
✅ **Advanced Filters** - Search, filter by track/day  
✅ **Better UX** - Dedicated pages for each section  
✅ **Performance** - Code splitting, lazy loading  
✅ **Analytics** - Track engagement per page  
✅ **Future-Ready** - Easy to add features

### Use Cases

#### Example 1: DevSummit 2025

- **Duration:** 3 days
- **Speakers:** 40 speakers
- **Sessions:** 50 sessions across 3 tracks
- **Attendees:** 500
- **Venue:** Convention center
- **Mode:** **Pro** 🚀

#### Example 2: KotlinConf Regional

- **Duration:** 2 days
- **Speakers:** 25 speakers
- **Sessions:** 35 sessions across 2 tracks
- **Attendees:** 300
- **Workshops:** 6 hands-on workshops
- **Mode:** **Pro** 🚀

#### Example 3: Tech Week Festival

- **Duration:** 5 days
- **Speakers:** 80+ speakers
- **Sessions:** 120+ sessions
- **Tracks:** 4 parallel tracks
- **Attendees:** 2000+
- **Mode:** **Pro** 🚀

### Configuration

```typescript
// src/config/site.config.ts
export const siteConfig: SiteConfig = {
  eventMode: {
    mode: 'pro',
    scale: {
      duration: 'multi-day',
      durationHours: 72, // 3 days
      speakerCount: 40,
      sessionCount: 50,
      parallelTracks: 3,
      expectedAttendees: 500,
    },
    features: {
      dedicatedSpeakerPages: true,
      sessionDetailPages: true,
      personalizedAgenda: true,
      liveEventDashboard: true,
      attendeeNetworking: true,
      multiDaySchedule: true,
    },
  },
};
```

---

## 🔄 Comparison Matrix

| Feature | Lite Mode | Pro Mode |
|---------|-----------|----------|
| **Architecture** | Single-page | Multi-route |
| **Navigation** | Anchor links (#section) | Routes (/speakers) |
| **Setup Complexity** | ⭐ Simple | ⭐⭐⭐ Advanced |
| **Performance (initial load)** | ⭐⭐⭐⭐ Fast | ⭐⭐⭐⭐⭐ Fastest |
| **SEO** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Scalability** | ⭐⭐ Limited to 10 speakers | ⭐⭐⭐⭐⭐ Unlimited |
| **Maintenance** | ⭐⭐⭐⭐⭐ Low | ⭐⭐⭐ Medium |
| **Content Management** | ⭐⭐⭐⭐ Easy | ⭐⭐⭐ Moderate |
| **Mobile Experience** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Great |
| **Search & Filter** | ⭐⭐ Basic | ⭐⭐⭐⭐⭐ Advanced |
| **Analytics** | ⭐⭐ Page views only | ⭐⭐⭐⭐⭐ Per-page tracking |
| **Shareability** | ⭐⭐⭐ One URL | ⭐⭐⭐⭐⭐ Deep links |
| **User Engagement** | ⭐⭐⭐⭐ High | ⭐⭐⭐⭐⭐ Very High |

---

## 🎯 Decision Framework

### Choose **Lite Mode** if:

1. ✅ Event is **single-day** (3-8 hours)
2. ✅ You have **<10 speakers**
3. ✅ **Single track** sessions
4. ✅ Want **simple setup** (2-4 hours)
5. ✅ **Limited development time**
6. ✅ Event is **local/regional**
7. ✅ Attendees **<200**
8. ✅ **First-time** organizing
9. ✅ Want **minimal maintenance**

### Choose **Pro Mode** if:

1. ✅ Event is **multi-day** (2+ days)
2. ✅ You have **20+ speakers**
3. ✅ **Multiple parallel tracks** (2-3+)
4. ✅ Need **advanced features** (search, filters)
5. ✅ Have **development resources**
6. ✅ Event is **national/international**
7. ✅ Attendees **200+**
8. ✅ **Established** conference
9. ✅ Want **better analytics**
10. ✅ Need **individual speaker pages**

---

## 🚦 Edge Cases

### Borderline Events

**Scenario 1: Single-day, but 15 speakers**

- **Recommendation:** Start with **Lite**, upgrade to **Pro** if needed
- **Rationale:** Lite can handle 15 speakers, but navigation might feel crowded

**Scenario 2: Multi-day, but only 8 speakers**

- **Recommendation:** **Lite Mode**
- **Rationale:** Small speaker count doesn't justify multi-route complexity

**Scenario 3: 2 days, 12 speakers, 2 tracks**

- **Recommendation:** **Pro Mode**
- **Rationale:** Multiple tracks benefit from dedicated agenda page

**Scenario 4: Large attendance (300+), but single-day**

- **Recommendation:** **Lite Mode** → **Pro Mode** optional
- **Rationale:** Attendance alone doesn't require multi-route

---

## 🔄 Migration Path

### From Lite to Pro

If your event grows, you can migrate:

**Steps:**

1. Update `mode: 'pro'` in config
2. Create route pages (speakers, agenda)
3. Update navigation to routes
4. Test thoroughly
5. Deploy

**Timeline:** 1-2 days of development

**When to migrate:**

- ✅ Speaker count exceeds 15
- ✅ Adding second day
- ✅ Introducing parallel tracks
- ✅ Need advanced filtering
- ✅ Want better SEO

### From Pro to Lite

Rarely needed, but possible:

**When to downgrade:**

- Event scale decreased
- Simpler maintenance preferred
- Development resources reduced

---

## 📋 Checklist

### Before Choosing Lite Mode

- [ ] Confirmed single-day event
- [ ] Less than 10 speakers
- [ ] Single track sessions
- [ ] Under 200 attendees
- [ ] Simple navigation sufficient
- [ ] 2-4 hours setup time available
- [ ] Team comfortable with basic customization

### Before Choosing Pro Mode

- [ ] Confirmed multi-day or 20+ speakers
- [ ] Multiple parallel tracks
- [ ] 200+ attendees expected
- [ ] Need advanced features
- [ ] 1-2 days setup time available
- [ ] Team has development skills
- [ ] Want detailed analytics
- [ ] Need individual speaker pages

---

## 💡 Pro Tips

### For Lite Mode

1. **Keep it simple** - Don't overcrowd the page
2. **Use anchor navigation** - Make sections easily accessible
3. **Optimize images** - Use WebP format, lazy loading
4. **Test scroll performance** - Ensure smooth scrolling
5. **Mobile first** - Design for mobile experience

### For Pro Mode

1. **Plan information architecture** - Map out all pages first
2. **Use URL state** - Make filters shareable
3. **Implement search** - Users need to find content quickly
4. **Test navigation** - Ensure easy movement between pages
5. **Monitor performance** - Use Lighthouse, bundle analysis

---

## 🎓 Case Studies

### Success Story: Flutter Guild (Lite Mode)

- **Event:** Flutter Guild Connect 2025
- **Duration:** 6 hours
- **Speakers:** 9 (3 featured + 6 community)
- **Attendees:** 150
- **Result:**
    - ✅ 95+ Lighthouse score
    - ✅ <2s load time
    - ✅ 20% registration conversion
    - ✅ Overwhelmingly positive feedback

**Why Lite worked:** Perfect size, single track, mobile-focused audience

### Success Story: DevSummit Asia (Pro Mode)

- **Event:** DevSummit Asia 2024
- **Duration:** 3 days
- **Speakers:** 42
- **Sessions:** 56 across 3 tracks
- **Attendees:** 600
- **Result:**
    - ✅ Individual speaker profiles increased engagement
    - ✅ Multi-day agenda simplified navigation
    - ✅ Search feature was heavily used
    - ✅ 25% higher registration than single-page version

**Why Pro worked:** Scale required dedicated pages, advanced filtering essential

---

## ❓ FAQ

### Q: Can I switch modes after launch?

**A:** Yes, but requires development work. Plan for 1-2 days of migration time.

### Q: Which mode is easier to maintain?

**A:** Lite mode requires less maintenance (single page vs multiple pages).

### Q: Which mode has better SEO?

**A:** Pro mode has better SEO due to multiple pages and deep linking.

### Q: Can I use lite mode for multi-day events?

**A:** Yes, but it becomes difficult with 20+ speakers or parallel tracks.

### Q: Is pro mode overkill for small events?

**A:** Yes, lite mode is perfectly suited for events under 10 speakers.

### Q: Can I customize the mode detection logic?

**A:** Yes, edit `getRecommendedMode()` in `src/lib/utils.ts`

### Q: What if I'm still unsure?

**A:** Start with **Lite Mode**. It's easier to upgrade later than downgrade.

---

## 🚀 Getting Started

### Ready to choose?

1. **Made your decision?**
    - Lite Mode → Continue with current setup
    - Pro Mode → Follow [PRO_MODE_SETUP.md](./PRO_MODE_SETUP.md)

2. **Still unsure?**
    - Use the auto-detection: it will recommend based on your config
    - Start with Lite, upgrade if needed

3. **Need help?**
    - Open a GitHub Discussion
    - Join our Discord community
    - Check the FAQ

---

## 📚 Next Steps

- **Chose Lite?** → [LITE_MODE_SETUP.md](./LITE_MODE_SETUP.md)
- **Chose Pro?** → [PRO_MODE_SETUP.md](./PRO_MODE_SETUP.md)
- **Want both?** → Read [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)

---

**Remember:** There's no wrong choice. Both modes are production-ready and battle-tested. Choose based on your event
scale and team capabilities! 🎉
