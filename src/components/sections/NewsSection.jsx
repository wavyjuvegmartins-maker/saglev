import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, Newspaper } from 'lucide-react'
import premiumImage from '../../sag9.png'
import workshopImage from '../../sag7.png'
import plugImage from '../../sag1.0.png'
import heroImage from '../../sag1.jpg'
import { newsAdminConfig } from '../../data/newsAdminConfig'

const SAGLEV_NEWS_ENDPOINT = 'https://saglev.com/wp-json/wp/v2/posts?per_page=30&_embed'

const fallbackSaglevArticles = [
  {
    slug: 'range-anxiety-in-nigeria-the-real-ev-concern-nobody-talks-about',
    title: 'Range Anxiety in Nigeria: The Real EV Concern Nobody Talks About',
    tag: 'Educational Series',
    source: 'SAGLEV',
    dateLabel: 'Jul 2026',
    dateValue: new Date('2026-07-20').getTime(),
    href: 'https://saglev.com/range-anxiety-in-nigeria-the-real-ev-concern-nobody-talks-about/',
    summary: 'A practical explainer on how Nigerian drivers can manage range anxiety and operate EVs confidently.',
    priority: 'Critical',
    relevanceScore: 14,
    image: premiumImage,
  },
  {
    slug: 'when-a-lower-price-costs-more-the-saglev-difference',
    title: 'When A Lower Price Costs More: The SAGLEV Difference',
    tag: 'Educational Series',
    source: 'SAGLEV',
    dateLabel: 'Apr 2026',
    dateValue: new Date('2026-04-16').getTime(),
    href: 'https://saglev.com/when-a-lower-price-costs-more-the-saglev-difference/',
    summary: 'Breaks down lifecycle ownership cost and why sticker price alone can be misleading for fleet buyers.',
    priority: 'Critical',
    relevanceScore: 13,
    image: workshopImage,
  },
  {
    slug: 'how-to-stretch-your-ev-battery-in-nigerias-driving-conditions',
    title: 'How To Stretch Your EV Battery In Nigeria Driving Conditions',
    tag: 'Educational Series',
    source: 'SAGLEV',
    dateLabel: 'Apr 2026',
    dateValue: new Date('2026-04-01').getTime(),
    href: 'https://saglev.com/how-to-stretch-your-ev-battery-in-nigerias-driving-conditions/',
    summary: 'Actionable battery care guidance tailored to road, weather, and charging realities in Nigeria.',
    priority: 'Critical',
    relevanceScore: 12,
    image: plugImage,
  },
  {
    slug: 'saglev-delivers-nigerias-first-locally-assembled-18-passenger-electric-van-to-stanbic-ibtc-bank',
    title: 'SAGLEV Delivers Nigeria\'s First Locally Assembled 18-Passenger Electric Van to Stanbic IBTC Bank',
    tag: 'Corporate / News',
    source: 'SAGLEV',
    dateLabel: 'Feb 2026',
    dateValue: new Date('2026-02-19').getTime(),
    href: 'https://saglev.com/saglev-delivers-nigerias-first-locally-assembled-18-passenger-electric-van-to-stanbic-ibtc-bank/',
    summary: 'A major commercialization milestone that validates local assembly and enterprise EV adoption.',
    priority: 'Critical',
    relevanceScore: 16,
    image: heroImage,
  },
  {
    slug: '2026-is-the-year-of-electric-vehicles-in-nigeria',
    title: '2026 Is The Year Of Electric Vehicles In Nigeria',
    tag: 'News',
    source: 'SAGLEV',
    dateLabel: 'Jan 2026',
    dateValue: new Date('2026-01-08').getTime(),
    href: 'https://saglev.com/2026-is-the-year-of-electric-vehicles-in-nigeria/',
    summary: 'Market-level perspective on why EV economics and operations now make stronger business sense.',
    priority: 'Important',
    relevanceScore: 9,
    image: premiumImage,
  },
  {
    slug: 'shuttlers-launches-first-electric-bus-in-partnership-with-saglev',
    title: 'Shuttlers Launches First Electric Bus in Partnership with SAGLEV',
    tag: 'News',
    source: 'SAGLEV',
    dateLabel: 'Sep 2025',
    dateValue: new Date('2025-09-02').getTime(),
    href: 'https://saglev.com/shuttlers-launches-first-electric-bus-in-partnership-with-saglev/',
    summary: 'Partnership rollout demonstrates practical fleet electrification in passenger transit operations.',
    priority: 'Important',
    relevanceScore: 11,
    image: workshopImage,
  },
  {
    slug: 'saglev-unveils-military-inspired-m-hero-917-electric-suv-in-nigeria',
    title: 'SAGLEV Unveils Military-Inspired, M-hero 917 Electric SUV in Nigeria',
    tag: 'Events / News',
    source: 'SAGLEV',
    dateLabel: 'Jul 2025',
    dateValue: new Date('2025-07-23').getTime(),
    href: 'https://saglev.com/saglev-unveils-military-inspired-m-hero-917-electric-suv-in-nigeria/',
    summary: 'Product expansion signal with a high-performance EV segment entry assembled locally in Lagos.',
    priority: 'Important',
    relevanceScore: 10,
    image: plugImage,
  },
]

const relatedArticles = [
  {
    slug: 'iea-global-ev-outlook-2026',
    title: 'Global EV Outlook',
    tag: 'Industry Report',
    source: 'IEA',
    dateLabel: '2026',
    dateValue: new Date('2026-01-01').getTime(),
    href: 'https://www.iea.org/reports/global-ev-outlook-2026',
    summary: 'A macro benchmark for adoption rates, charging trends, and policy frameworks shaping EV growth.',
    priority: 'Important',
    relevanceScore: 9,
    image: heroImage,
  },
  {
    slug: 'mckinsey-ev-charging-infrastructure-trends',
    title: 'Electric Vehicle Charging Infrastructure Trends',
    tag: 'Market Intelligence',
    source: 'McKinsey',
    dateLabel: '2026',
    dateValue: new Date('2026-01-01').getTime(),
    href: 'https://www.mckinsey.com/industries/automotive-and-assembly/our-insights',
    summary: 'Useful strategic context for public and private charging deployment decisions.',
    priority: 'Important',
    relevanceScore: 8,
    image: premiumImage,
  },
  {
    slug: 'world-bank-ev-financing-signals-emerging-markets',
    title: 'Transport and EV Financing Signals in Emerging Markets',
    tag: 'Finance / Mobility',
    source: 'World Bank',
    dateLabel: '2026',
    dateValue: new Date('2026-01-01').getTime(),
    href: 'https://www.worldbank.org/en/topic/transport',
    summary: 'Policy and financing direction relevant to scaling EV operations across African cities.',
    priority: 'Important',
    relevanceScore: 8,
    image: workshopImage,
  },
]

const feedFilters = [
  { key: 'all', label: 'All Crucial Updates' },
  { key: 'saglev', label: 'SAGLEV News' },
  { key: 'related', label: 'Related EV News' },
]

const stripHtml = (value = '') =>
  value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

const toDateLabel = (dateString) => {
  const parsedDate = new Date(dateString)

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Unknown Date'
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(parsedDate)
}

const getFirstInlineImage = (html = '') => {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return match?.[1] || ''
}

const getArticleImage = (post) => {
  const featuredFromEmbed = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const featuredFromJetpack = post.jetpack_featured_media_url
  const firstInlineImage = getFirstInlineImage(post.content?.rendered || '')

  return featuredFromEmbed || featuredFromJetpack || firstInlineImage || heroImage
}

const scoreRelevance = ({ title, summary, categories, dateValue }) => {
  const searchable = `${title} ${summary} ${categories.join(' ')}`.toLowerCase()
  let score = 0

  Object.entries(newsAdminConfig.keywordWeights).forEach(([keyword, weight]) => {
    if (searchable.includes(keyword)) {
      score += weight
    }
  })

  if (categories.some((name) => name.toLowerCase() === 'corporate')) {
    score += 3
  }

  if (categories.some((name) => name.toLowerCase() === 'news')) {
    score += 2
  }

  if (categories.some((name) => name.toLowerCase() === 'events')) {
    score += 1
  }

  const daysOld = Math.max(0, Math.floor((Date.now() - dateValue) / (1000 * 60 * 60 * 24)))
  if (daysOld <= 120) {
    score += 2
  } else if (daysOld <= 365) {
    score += 1
  }

  return score
}

const toPriority = (score) => {
  if (score >= 11) {
    return 'Critical'
  }

  if (score >= 6) {
    return 'Important'
  }

  return 'Watch'
}

const applyOverrides = (articles) => {
  const pinned = new Set(newsAdminConfig.pinnedSlugs)
  const blocked = new Set(newsAdminConfig.blockedSlugs)

  return articles
    .filter((article) => !blocked.has(article.slug))
    .map((article) => {
      const manualPriority = newsAdminConfig.manualPriorityBySlug[article.slug]

      if (manualPriority) {
        return { ...article, priority: manualPriority }
      }

      return article
    })
    .sort((a, b) => {
      const pinDelta = Number(pinned.has(b.slug)) - Number(pinned.has(a.slug))
      if (pinDelta !== 0) {
        return pinDelta
      }

      const priorityOrder = { Critical: 3, Important: 2, Watch: 1 }
      const priorityDelta = (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0)
      if (priorityDelta !== 0) {
        return priorityDelta
      }

      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore
      }

      return b.dateValue - a.dateValue
    })
}

const isCrucial = (article) => {
  const isPinned = newsAdminConfig.pinnedSlugs.includes(article.slug)
  return isPinned || article.priority === 'Critical' || article.priority === 'Important'
}

const mapWordpressPost = (post) => {
  const terms = post._embedded?.['wp:term'] || []
  const flattenedTerms = terms.flat()
  const categories = flattenedTerms.filter((item) => item?.taxonomy === 'category').map((item) => item.name)
  const categoryLabel = categories.slice(0, 2).join(' / ') || 'SAGLEV Update'
  const summary = stripHtml(post.excerpt?.rendered || '')
  const title = stripHtml(post.title?.rendered || 'Untitled SAGLEV Update')
  const dateValue = new Date(post.date || post.modified || Date.now()).getTime()
  const relevanceScore = scoreRelevance({
    title,
    summary,
    categories,
    dateValue,
  })

  return {
    slug: post.slug,
    title,
    tag: categoryLabel,
    source: 'SAGLEV',
    dateLabel: toDateLabel(post.date || post.modified),
    dateValue,
    href: post.link,
    summary: summary || 'Read the full article for latest details from SAGLEV.',
    priority: toPriority(relevanceScore),
    relevanceScore,
    image: getArticleImage(post),
  }
}

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)
  const [saglevArticles, setSaglevArticles] = useState(() => applyOverrides(fallbackSaglevArticles))
  const [isSyncing, setIsSyncing] = useState(true)
  const [syncError, setSyncError] = useState('')

  useEffect(() => {
    let isCancelled = false

    const syncSaglevNews = async () => {
      try {
        setIsSyncing(true)
        setSyncError('')

        const response = await fetch(SAGLEV_NEWS_ENDPOINT)

        if (!response.ok) {
          throw new Error(`News sync failed with status ${response.status}`)
        }

        const payload = await response.json()
        const mapped = payload.map(mapWordpressPost)
        const crucialOnly = mapped.filter(isCrucial)
        const withOverrides = applyOverrides(crucialOnly)

        if (!isCancelled && withOverrides.length > 0) {
          setSaglevArticles(withOverrides)
        }
      } catch (error) {
        if (!isCancelled) {
          setSyncError('Using curated backup while live feed is unavailable.')
        }
      } finally {
        if (!isCancelled) {
          setIsSyncing(false)
        }
      }
    }

    syncSaglevNews()

    return () => {
      isCancelled = true
    }
  }, [])

  const articles = useMemo(() => {
    if (activeFilter === 'saglev') {
      return saglevArticles
    }

    if (activeFilter === 'related') {
      return relatedArticles
    }

    return [...saglevArticles, ...relatedArticles]
  }, [activeFilter])

  const visibleArticles = articles.slice(0, visibleCount)
  const canLoadMore = visibleCount < articles.length

  const onFilterChange = (nextFilter) => {
    setActiveFilter(nextFilter)
    setVisibleCount(6)
  }

  return (
    <section id="news" className="bg-white px-6 py-20 text-[#1d2735] lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#72cc2e]">NEWSROOM</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Crucial SAGLEV and EV Industry Updates</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#4a5a70] md:text-base">
            This feed combines major SAGLEV milestones with related EV market context, so visitors can track
            decisions, launches, and practical adoption signals in one place.
          </p>
          <a
            href="https://saglev.com/category/news/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1d2735] transition hover:text-[#72cc2e]"
          >
            Open Full SAGLEV News Archive <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em]">
          {isSyncing ? (
            <span className="rounded-full bg-[#eef3f8] px-3 py-1 text-[#4a5a70]">Syncing SAGLEV live feed...</span>
          ) : (
            <span className="rounded-full bg-[#eef9e5] px-3 py-1 text-[#447c1f]">Live feed synced</span>
          )}
          {syncError && <span className="text-[#8a5a1f]">{syncError}</span>}
        </div>

        <div className="mb-8 flex flex-wrap gap-3" id="education">
          {feedFilters.map((filter) => {
            const isActive = activeFilter === filter.key

            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => onFilterChange(filter.key)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition md:text-[11px] ${
                  isActive
                    ? 'border-[#72cc2e] bg-[#72cc2e] text-[#111c1a]'
                    : 'border-[#ccd5e1] bg-white text-[#334258] hover:border-[#72cc2e] hover:text-[#1d2735]'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleArticles.map((post, idx) => (
            <motion.article
              key={`${post.source}-${post.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              className="group overflow-hidden rounded-xl border border-[#dce3ea] bg-[#fdfefe]"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                  <span className="inline-flex items-center gap-1">
                    <Newspaper size={14} /> {post.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#6d7b8f]">
                    <CalendarDays size={14} /> {post.dateLabel}
                  </span>
                  <span className="rounded-full border border-[#dce3ea] px-2 py-1 text-[10px] text-[#5f6e84]">
                    {post.source}
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] ${
                      post.priority === 'Critical'
                        ? 'bg-[#eef9e5] text-[#447c1f]'
                        : 'bg-[#eef3f8] text-[#51637a]'
                    }`}
                  >
                    {post.priority}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#55647a]">{post.summary}</p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#1d2735] transition hover:text-[#72cc2e]"
                >
                  READ ARTICLE <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {canLoadMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 3)}
              className="rounded-full border border-[#1d2735] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1d2735] transition hover:border-[#72cc2e] hover:text-[#72cc2e]"
            >
              Show More News
            </button>
          </div>
        )}

        <div id="press" className="sr-only" aria-hidden="true">
          Press anchor
        </div>
      </div>
    </section>
  )
}
