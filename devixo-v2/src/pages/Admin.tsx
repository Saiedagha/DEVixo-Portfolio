import React from 'react';
import { asset } from '../lib/i18n';
import { Icon } from '../components/Icon';
import { projects, projectCategories, domainOf } from '../data/projects';
import { services } from '../data/services';
import { technologies, techCategories } from '../data/technologies';
import { faqs } from '../data/faqs';
import { posts } from '../data/blog';

/**
 * CMS dashboard concept — a separate admin experience (noindex, not linked from the
 * public site). It is a static, clickable design reference: no data is saved.
 */
const views = [
  ['overview', 'dashboard', 'Overview'],
  ['projects', 'folder', 'Projects'],
  ['services', 'layers', 'Services'],
  ['technologies', 'cpu', 'Technologies'],
  ['testimonials', 'quote', 'Testimonials'],
  ['blog', 'news', 'Blog posts'],
  ['faqs', 'help', 'FAQs'],
  ['inquiries', 'inbox', 'Inquiries'],
  ['languages', 'languages', 'Languages'],
  ['seo', 'search', 'SEO'],
] as const;

const Status = ({ s }: { s: 'published' | 'draft' }) => <span className={`pill ${s === 'published' ? 'pill-ok' : 'pill-wait'}`}>{s === 'published' ? 'Published' : 'Draft'}</span>;

function TableTools({ placeholder, filter = true, add }: { placeholder: string; filter?: boolean; add: string }) {
  return (
    <div className="adm-tools">
      <label className="search">
        <Icon name="search" size={16} />
        <span className="sr-only">{placeholder}</span>
        <input type="search" className="input" placeholder={placeholder} data-adm-search />
      </label>
      {filter && (
        <select className="select adm-select" aria-label="Filter by status" data-adm-status defaultValue="">
          <option value="">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      )}
      <button type="button" className="btn btn-primary btn-sm" data-open-dialog="edit-dialog"><Icon name="plus" size={16} /> <span>{add}</span></button>
    </div>
  );
}

function Empty({ icon, title, text, action }: { icon: string; title: string; text: string; action?: string }) {
  return (
    <div className="adm-empty">
      <span className="adm-empty-icon"><Icon name={icon} size={28} /></span>
      <h3 className="h4">{title}</h3>
      <p>{text}</p>
      {action && <button type="button" className="btn btn-primary btn-sm" data-open-dialog="edit-dialog"><Icon name="plus" size={16} /> <span>{action}</span></button>}
    </div>
  );
}

const RowActions = ({ name }: { name: string }) => (
  <div className="adm-actions">
    <button type="button" className="icon-btn" aria-label={`Edit ${name}`} data-open-dialog="edit-dialog" data-edit-name={name}><Icon name="pencil" size={16} /></button>
    <button type="button" className="icon-btn danger" aria-label={`Delete ${name}`} data-open-dialog="confirm-dialog" data-edit-name={name}><Icon name="trash" size={16} /></button>
  </div>
);

export function Admin() {
  const published = projects.filter((p) => p.status === 'published').length;
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Content dashboard | DEVixo</title>
        <link rel="icon" href={asset('img/brand/icon.png')} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Manrope:wght@400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href={asset('css/styles.css')} />
        <link rel="stylesheet" href={asset('css/admin.css')} />
      </head>
      <body className="adm">
        <div className="adm-shell">
          <aside className="adm-side" aria-label="Dashboard">
            <div className="adm-brand">
              <img src={asset('img/brand/logo-dark.png')} alt="DEVixo" width={120} height={21} />
              <span className="adm-badge">CMS</span>
            </div>
            <nav className="adm-nav" aria-label="Content sections">
              {views.map(([id, icon, label]) => (
                <a key={id} href={`#${id}`} data-view-link={id}>
                  <Icon name={icon} size={18} /> <span>{label}</span>
                  {id === 'inquiries' && <span className="adm-count">0</span>}
                </a>
              ))}
            </nav>
            <div className="adm-user">
              <span className="avatar"></span>
              <span><strong>Admin</strong><small>Editor</small></span>
              <a href={asset('en/')} className="icon-btn" aria-label="View public site"><Icon name="external" size={16} /></a>
            </div>
          </aside>

          <main className="adm-main" id="main">
            <div className="adm-concept" role="note"><Icon name="eye" size={16} /> Design concept — interactions are simulated and nothing is saved. Connect a CMS or database to make it live.</div>

            {/* Overview */}
            <section className="adm-view" id="overview" data-view="overview" aria-labelledby="ov-h">
              <header className="adm-head"><div><h1 id="ov-h" className="h2">Overview</h1><p className="muted">Manage everything shown on devixo-eg.site in English and Arabic.</p></div></header>
              <div className="adm-stats">
                {[
                  ['folder', 'Projects', `${published} published`, 'projects'],
                  ['layers', 'Services', `${services.length} pages`, 'services'],
                  ['cpu', 'Technologies', `${technologies.length} items`, 'technologies'],
                  ['news', 'Blog posts', `${posts.length} published`, 'blog'],
                  ['help', 'FAQs', `${faqs.length} questions`, 'faqs'],
                  ['inbox', 'Inquiries', 'No new requests', 'inquiries'],
                ].map(([ic, l, v, id]) => (
                  <a key={id} className="adm-stat" href={`#${id}`}>
                    <span className="icon-tile"><Icon name={ic} size={20} /></span>
                    <span><strong>{l}</strong><small>{v}</small></span>
                    <Icon name="arrow" size={16} />
                  </a>
                ))}
              </div>
              <div className="adm-grid2">
                <div className="adm-card">
                  <h2 className="h4">Needs attention</h2>
                  <ul className="adm-todo">
                    <li><Icon name="image" size={16} /> {projects.filter((p) => !p.image).length} projects have no screenshot</li>
                    <li><Icon name="file" size={16} /> {projects.filter((p) => !p.context).length} case studies are missing business context</li>
                    <li><Icon name="quote" size={16} /> No approved testimonials yet</li>
                    <li><Icon name="mail" size={16} /> Business email address not set</li>
                  </ul>
                </div>
                <div className="adm-card">
                  <h2 className="h4">Content languages</h2>
                  <div className="adm-lang-bars">
                    <div><span>English</span><span className="bar"><i style={{ width: '100%' }}></i></span><span className="mono">100%</span></div>
                    <div><span lang="ar">العربية</span><span className="bar"><i style={{ width: '100%' }}></i></span><span className="mono">100%</span></div>
                  </div>
                  <p className="muted" style={{ fontSize: '.875rem', marginTop: 12 }}>Every published item has both language versions.</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="adm-view" id="projects" data-view="projects" aria-labelledby="pr-h" hidden>
              <header className="adm-head"><div><h1 id="pr-h" className="h2">Projects</h1><p className="muted">Portfolio items and case studies.</p></div></header>
              <TableTools placeholder="Search projects" add="New project" />
              <div className="adm-table-wrap">
                <table className="adm-table" data-adm-table>
                  <thead><tr><th scope="col">Project</th><th scope="col">Category</th><th scope="col">Platform</th><th scope="col">Featured</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.slug} data-status={p.status} data-text={`${p.title} ${p.categories.join(' ')} ${p.platform || ''}`.toLowerCase()}>
                        <td>
                          <div className="adm-proj">
                            <span className="adm-thumb" style={p.image ? { backgroundImage: `url(${asset('img/projects/' + p.image)})` } : { background: p.accent }}></span>
                            <span><strong>{p.title}</strong><small dir="ltr">{domainOf(p.url)}</small></span>
                          </div>
                        </td>
                        <td>{p.categories.map((c) => projectCategories.find((x) => x.id === c)!.label.en).join(', ')}</td>
                        <td>{p.platform || <span className="muted">—</span>}</td>
                        <td>{p.featured ? <Icon name="check" size={16} /> : <span className="muted">—</span>}</td>
                        <td><Status s={p.status} /></td>
                        <td><RowActions name={p.title} /></td>
                      </tr>
                    ))}
                    <tr className="adm-noresults" hidden><td colSpan={6}><Empty icon="search" title="No matching projects" text="Try another search term or status." /></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Services */}
            <section className="adm-view" id="services" data-view="services" aria-labelledby="sv-h" hidden>
              <header className="adm-head"><div><h1 id="sv-h" className="h2">Services</h1><p className="muted">Service pages, features, and related projects.</p></div></header>
              <TableTools placeholder="Search services" add="New service" />
              <div className="adm-table-wrap">
                <table className="adm-table" data-adm-table>
                  <thead><tr><th scope="col">Service</th><th scope="col">Slug</th><th scope="col">Features</th><th scope="col">Related projects</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.slug} data-status="published" data-text={s.title.en.toLowerCase()}>
                        <td><div className="adm-proj"><span className="icon-tile sm"><Icon name={s.icon} size={16} /></span><span><strong>{s.title.en}</strong><small lang="ar">{s.title.ar}</small></span></div></td>
                        <td className="mono">/services/{s.slug}</td>
                        <td>{s.offerings.length || '—'}</td>
                        <td>{s.relatedProjects.length}</td>
                        <td><Status s="published" /></td>
                        <td><RowActions name={s.title.en} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Technologies */}
            <section className="adm-view" id="technologies" data-view="technologies" aria-labelledby="tc-h" hidden>
              <header className="adm-head"><div><h1 id="tc-h" className="h2">Technologies</h1><p className="muted">Grouped by category. “Core” items show a highlight on the site.</p></div></header>
              <TableTools placeholder="Search technologies" filter={false} add="Add technology" />
              <div className="adm-table-wrap">
                <table className="adm-table" data-adm-table>
                  <thead><tr><th scope="col">Name</th><th scope="col">Category</th><th scope="col">Type</th><th scope="col">Level</th><th scope="col">Logo</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {technologies.map((x) => (
                      <tr key={x.id} data-status="published" data-text={x.name.toLowerCase()}>
                        <td><strong>{x.name}</strong></td>
                        <td>{techCategories.find((c) => c.id === x.category)!.title.en}</td>
                        <td>{x.kind.en}</td>
                        <td><span className={`pill ${x.level === 'core' ? 'pill-ok' : 'pill-neutral'}`}>{x.level === 'core' ? 'Core' : 'Supported'}</span></td>
                        <td><span className="muted">Upload</span></td>
                        <td><RowActions name={x.name} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Testimonials — empty state */}
            <section className="adm-view" id="testimonials" data-view="testimonials" aria-labelledby="ts-h" hidden>
              <header className="adm-head"><div><h1 id="ts-h" className="h2">Testimonials</h1><p className="muted">Only reviews with the client’s written approval should be published.</p></div></header>
              <div className="adm-card"><Empty icon="quote" title="No testimonials yet" text="Add a client review once the client has approved its publication, and link it to the related project." action="Add testimonial" /></div>
            </section>

            {/* Blog */}
            <section className="adm-view" id="blog" data-view="blog" aria-labelledby="bl-h" hidden>
              <header className="adm-head"><div><h1 id="bl-h" className="h2">Blog posts</h1><p className="muted">Articles in English and Arabic.</p></div></header>
              <TableTools placeholder="Search posts" add="New post" />
              <div className="adm-table-wrap">
                <table className="adm-table" data-adm-table>
                  <thead><tr><th scope="col">Title</th><th scope="col">Category</th><th scope="col">Date</th><th scope="col">Languages</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {posts.map((p) => (
                      <tr key={p.slug} data-status="published" data-text={p.title.en.toLowerCase()}>
                        <td><strong>{p.title.en}</strong></td>
                        <td>{p.category.en}</td>
                        <td className="mono">{p.date}</td>
                        <td>EN · AR</td>
                        <td><Status s="published" /></td>
                        <td><RowActions name={p.title.en} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQs */}
            <section className="adm-view" id="faqs" data-view="faqs" aria-labelledby="fq-h" hidden>
              <header className="adm-head"><div><h1 id="fq-h" className="h2">FAQs</h1><p className="muted">Drag to reorder within a category.</p></div></header>
              <TableTools placeholder="Search questions" filter={false} add="New question" />
              <div className="adm-table-wrap">
                <table className="adm-table" data-adm-table>
                  <thead><tr><th scope="col"><span className="sr-only">Order</span></th><th scope="col">Question</th><th scope="col">Category</th><th scope="col">Order</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {[...faqs].sort((a, b) => a.order - b.order).map((f) => (
                      <tr key={f.id} data-status="published" data-text={f.q.en.toLowerCase()}>
                        <td className="muted"><Icon name="grip" size={16} /></td>
                        <td><strong>{f.q.en}</strong></td>
                        <td>{f.category}</td>
                        <td className="mono">{f.order}</td>
                        <td><RowActions name={f.q.en} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Inquiries — empty + loading demo */}
            <section className="adm-view" id="inquiries" data-view="inquiries" aria-labelledby="iq-h" hidden>
              <header className="adm-head"><div><h1 id="iq-h" className="h2">Inquiries</h1><p className="muted">Project requests submitted through the contact form.</p></div></header>
              <div className="adm-card adm-loading" data-loading aria-busy="true" aria-label="Loading inquiries">
                {[0, 1, 2].map((i) => <div key={i} className="adm-skel"><span></span><span></span><span></span></div>)}
              </div>
              <div className="adm-card" data-loaded hidden>
                <Empty icon="inbox" title="No inquiries yet" text="When the contact form is connected to a backend or form service, new project requests will appear here with their status." />
              </div>
            </section>

            {/* Languages */}
            <section className="adm-view" id="languages" data-view="languages" aria-labelledby="lg-h" hidden>
              <header className="adm-head"><div><h1 id="lg-h" className="h2">Languages</h1><p className="muted">Site languages and URL structure.</p></div></header>
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <thead><tr><th scope="col">Language</th><th scope="col">Direction</th><th scope="col">URL prefix</th><th scope="col">Default</th><th scope="col">Status</th></tr></thead>
                  <tbody>
                    <tr><td><strong>English</strong></td><td>LTR</td><td className="mono">/en/</td><td><Icon name="check" size={16} /></td><td><Status s="published" /></td></tr>
                    <tr><td><strong lang="ar">العربية</strong></td><td>RTL</td><td className="mono">/ar/</td><td><span className="muted">—</span></td><td><Status s="published" /></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SEO */}
            <section className="adm-view" id="seo" data-view="seo" aria-labelledby="se-h" hidden>
              <header className="adm-head"><div><h1 id="se-h" className="h2">SEO</h1><p className="muted">Default metadata. Each page and project can override these.</p></div></header>
              <div className="adm-card">
                <div className="form-grid">
                  <div className="field"><label htmlFor="seo-t">Default title (EN)</label><input id="seo-t" className="input" defaultValue="DEVixo — From Ideas to Powerful Digital Solutions." /></div>
                  <div className="field"><label htmlFor="seo-ta">Default title (AR)</label><input id="seo-ta" className="input" dir="rtl" lang="ar" defaultValue="ديفيكسو — من الفكرة إلى حلول رقمية قوية." /></div>
                  <div className="field field-full"><label htmlFor="seo-d">Default description (EN)</label><textarea id="seo-d" className="textarea" style={{ minHeight: 90 }} defaultValue="Devixo designs and develops high-quality websites, e-commerce stores, and custom software solutions." /></div>
                  <div className="field"><label htmlFor="seo-c">Canonical domain</label><input id="seo-c" className="input" dir="ltr" defaultValue="https://www.devixo-eg.site" /></div>
                  <div className="field"><label htmlFor="seo-og">Social sharing image</label><button type="button" className="btn btn-secondary"><Icon name="upload" size={16} /> <span>Upload 1200×630</span></button></div>
                </div>
                <div className="form-foot"><span className="muted">Changes are not saved in this concept.</span><button type="button" className="btn btn-primary" data-toast="Settings saved (concept)"><span>Save changes</span></button></div>
              </div>
            </section>
          </main>
        </div>

        {/* Edit dialog */}
        <dialog id="edit-dialog" className="adm-dialog" aria-labelledby="ed-h">
          <form method="dialog">
            <header className="adm-dialog-head">
              <h2 id="ed-h" className="h3">Edit <span data-dialog-name>project</span></h2>
              <button className="icon-btn" value="cancel" aria-label="Close"><Icon name="x" size={18} /></button>
            </header>
            <div className="adm-tabs" role="tablist" aria-label="Language">
              <button type="button" role="tab" aria-selected="true" aria-controls="tab-en" id="t-en" data-tab="tab-en">English</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="tab-ar" id="t-ar" data-tab="tab-ar" lang="ar">العربية</button>
              <button type="button" role="tab" aria-selected="false" aria-controls="tab-seo" id="t-seo" data-tab="tab-seo">SEO</button>
            </div>
            <div className="adm-dialog-body">
              <div role="tabpanel" id="tab-en" aria-labelledby="t-en" className="form-grid">
                <div className="field field-full"><label htmlFor="e-title">Title</label><input id="e-title" className="input" data-dialog-input /></div>
                <div className="field"><label htmlFor="e-slug">Slug</label><input id="e-slug" className="input mono" dir="ltr" /></div>
                <div className="field"><label htmlFor="e-url">Live URL</label><input id="e-url" className="input" dir="ltr" placeholder="https://" /></div>
                <div className="field field-full"><label htmlFor="e-sum">Short description</label><textarea id="e-sum" className="textarea" style={{ minHeight: 90 }}></textarea></div>
                <div className="field"><label htmlFor="e-cat">Service category</label><select id="e-cat" className="select">{projectCategories.map((c) => <option key={c.id}>{c.label.en}</option>)}</select></div>
                <div className="field"><label htmlFor="e-plat">Platform</label><input id="e-plat" className="input" placeholder="Only if verified" /></div>
                <div className="field field-full"><span className="field-label">Thumbnail & gallery</span><div className="adm-drop"><Icon name="upload" size={20} /> Drop images or <u>browse</u> · WebP, 1600px wide</div></div>
                <label className="check-row field-full"><input type="checkbox" /> <span>Featured on homepage</span></label>
              </div>
              <div role="tabpanel" id="tab-ar" aria-labelledby="t-ar" className="form-grid" hidden dir="rtl" lang="ar">
                <div className="field field-full"><label htmlFor="a-title">العنوان</label><input id="a-title" className="input" /></div>
                <div className="field field-full"><label htmlFor="a-sum">وصف مختصر</label><textarea id="a-sum" className="textarea" style={{ minHeight: 90 }}></textarea></div>
                <div className="field field-full"><label htmlFor="a-cs">دراسة الحالة</label><textarea id="a-cs" className="textarea"></textarea></div>
              </div>
              <div role="tabpanel" id="tab-seo" aria-labelledby="t-seo" className="form-grid" hidden>
                <div className="field field-full"><label htmlFor="s-t">SEO title</label><input id="s-t" className="input" /><span className="field-hint">50–60 characters recommended</span></div>
                <div className="field field-full"><label htmlFor="s-d">Meta description</label><textarea id="s-d" className="textarea" style={{ minHeight: 90 }}></textarea><span className="field-hint">140–160 characters recommended</span></div>
              </div>
            </div>
            <footer className="adm-dialog-foot">
              <select className="select adm-select" aria-label="Publication status"><option>Draft</option><option>Published</option></select>
              <div className="actions">
                <button className="btn btn-secondary" value="cancel">Cancel</button>
                <button className="btn btn-primary" value="save" data-toast="Saved (concept — not persisted)">Save</button>
              </div>
            </footer>
          </form>
        </dialog>

        {/* Confirm dialog */}
        <dialog id="confirm-dialog" className="adm-dialog sm" aria-labelledby="cf-h">
          <form method="dialog">
            <div className="adm-dialog-body" style={{ textAlign: 'center' }}>
              <span className="adm-empty-icon danger"><Icon name="trash" size={24} /></span>
              <h2 id="cf-h" className="h3">Delete “<span data-dialog-name>item</span>”?</h2>
              <p className="muted">This removes it from both language versions of the site. This can’t be undone.</p>
            </div>
            <footer className="adm-dialog-foot center">
              <button className="btn btn-secondary" value="cancel">Cancel</button>
              <button className="btn btn-danger" value="delete" data-toast="Deleted (concept — nothing was removed)">Delete</button>
            </footer>
          </form>
        </dialog>

        <div className="adm-toast" role="status" aria-live="polite" hidden data-toast-el></div>
        <script src={asset('js/admin.js')} defer></script>
      </body>
    </html>
  );
}
