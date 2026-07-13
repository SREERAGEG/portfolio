const AI_SUGGESTIONS = {
    subject: [
        "Exploring RPA Automation Opportunities",
        "Healthcare RCM Automation Inquiry",
        "Hiring — RPA & Python Automation Engineer",
        "Bot Orchestration Architecture Consultation",
        "HIPAA-Compliant Automation Solutions Needed",
        "FastAPI + AWS Workflow Collaboration",
        "Self-Healing Bot Framework Discussion",
        "US Healthcare Portal Automation Project",
        "Python SDET Architecture Partnership",
        "Let’s Connect — Automation Engineering"
    ],
    message: [
        `Hi Sreerag,\n\nI came across your portfolio and was really impressed by your work in RPA automation and bot orchestration at scale.\n\nI’d love to explore potential collaboration or opportunities. Looking forward to connecting!`,
        `Hi Sreerag,\n\nWe’re building HIPAA-compliant bots for our US healthcare RCM workflows and your background looks like a perfect fit.\n\nWould love to schedule a quick call to discuss the opportunity!`,
        `Hello Sreerag,\n\nI found your portfolio through LinkedIn and was blown away by your FastAPI bot orchestration architecture. We have a similar challenge at our company and would love your input.\n\nLooking forward to your response!`,
        `Hi Sreerag,\n\nYour experience with self-healing automation bots and AWS ECS/SQS is exactly what our team needs. We’re building a large-scale process automation pipeline and want to bring you on board.\n\nCan we connect this week?`,
        `Hello Sreerag,\n\nI’m reaching out regarding a Python automation architect opportunity. Your hands-on experience with Playwright, Selenium, and FastAPI is highly relevant to what we’re building.\n\nPlease let me know if you’re open to a conversation!`,
        `Hi Sreerag,\n\nWe’re a healthcare technology startup working on automating insurance verification and prior authorization workflows. Your expertise in US healthcare portal automation is exactly what we need.\n\nWould you be interested in learning more?`,
        `Hello Sreerag,\n\nI saw your RPA bot simulator demo and was genuinely impressed by your automation architecture knowledge. I’d love to collaborate on a similar project for our organization.\n\nLet’s connect!`,
        `Hi Sreerag,\n\nWe’re looking to scale our bot infrastructure using AWS ECS and SQS — something you’ve clearly mastered. I’d love to get your advice and potentially bring you in as a consultant.\n\nHope to hear from you soon!`,
        `Hello Sreerag,\n\nYour work on HIPAA-compliant claim submission bots is remarkable. We’re a US-based RCM company looking to modernize our automation stack and your profile stood out.\n\nWould love to discuss a full-time or contract engagement.`,
        `Hi Sreerag,\n\nI’m a fellow automation engineer and stumbled upon your portfolio. Your approach to self-healing selectors and distributed bot execution is genuinely inspiring.\n\nWould love to exchange ideas and possibly collaborate on open-source tooling!`
    ]
};

// Keep tracks of random queues
let shuffledSuggestions = { subject: [], message: [] };
let currentAIIndex = { subject: 0, message: 0 };

// Shuffle array helper
function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// Initialize randomized lists
try {
    shuffledSuggestions.subject = shuffleArray(AI_SUGGESTIONS.subject);
    shuffledSuggestions.message = shuffleArray(AI_SUGGESTIONS.message);
} catch (e) {
    console.error("Failed to initialize suggestions:", e);
}

function aiTypewriter(fieldId, btn) {
    const field = document.getElementById(fieldId);
    if (!field || btn.classList.contains('typing')) return;
    
    // Fallback if shuffle failed or arrays are empty
    if (!shuffledSuggestions[fieldId] || shuffledSuggestions[fieldId].length === 0) {
        shuffledSuggestions[fieldId] = shuffleArray(AI_SUGGESTIONS[fieldId]);
    }
    
    const suggestions = shuffledSuggestions[fieldId];
    const text = suggestions[currentAIIndex[fieldId] % suggestions.length];
    currentAIIndex[fieldId]++;
    
    field.value = '';
    if (field.tagName === 'TEXTAREA') { field.style.height = 'auto'; }
    field.focus();
    
    btn.classList.add('typing');
    btn.innerHTML = `<span style="font-size:11px">&#10022;</span> Typing...`;
    
    let i = 0;
    const speed = fieldId === 'subject' ? 36 : 16;
    function typeChar() {
        if (i < text.length) {
            field.value += text[i];
            if (field.tagName === 'TEXTAREA') {
                field.style.height = 'auto';
                field.style.height = field.scrollHeight + 'px';
            }
            i++;
            setTimeout(typeChar, speed + Math.random() * 22);
        } else {
            btn.classList.remove('typing');
            btn.innerHTML = `<span style="font-size:11px">&#10022;</span> Suggest Another`;
        }
    }
    typeChar();
}

const BOT_LOGS = {
    claim: [
        {text:"Initializing claim submission run...",type:"info",speed:200},
        {text:"Connecting to AWS SQS Claim queue client...",type:"info",speed:300},
        {text:"Successfully polled message ID: sqs-claim-482a9b",type:"system",speed:400},
        {text:"Received claim data payload validation checklist...",type:"system",speed:200},
        {text:"Patient Name: [MASKED] (HIPAA Secure)",type:"secure",speed:300},
        {text:"Portal login triggered: UnitedHealthcare Commercial",type:"info",speed:500},
        {text:"Filling input elements dynamically...",type:"info",speed:400},
        {text:"Checking form CAPTCHA presence...",type:"system",speed:300},
        {text:"CAPTCHA element detected. Launching solver fallback...",type:"recover",speed:600},
        {text:"CAPTCHA solved successfully in 1.4s.",type:"recover",speed:300},
        {text:"Verifying form data fields before submission...",type:"info",speed:400},
        {text:"Submitting CMS-1500 layout form data...",type:"info",speed:700},
        {text:"SUCCESS: Claim submitted. Transaction ID: TX-84729104",type:"success",speed:500},
        {text:"Extracting submit proof PDF confirmation...",type:"system",speed:400},
        {text:"Uploading receipt to AWS S3: claims-receipts-2026/...",type:"system",speed:300},
        {text:"Sending callback status to webhooks...",type:"info",speed:400},
        {text:"Execution finished. Worker thread released.",type:"success",speed:300}
    ],
    eob: [
        {text:"Starting structured EOB data extraction job...",type:"info",speed:200},
        {text:"Downloading raw PDF content from portal folder...",type:"info",speed:500},
        {text:"Parsing binary PDF streams directly (replacing OCR)...",type:"system",speed:400},
        {text:"Reading tabular payment items on Page 1...",type:"system",speed:300},
        {text:"Detected 4 claim lines. Normalizing coordinates...",type:"info",speed:250},
        {text:"Extracting: Charged, Allowed, Paid, Copay, Coinsurance",type:"system",speed:450},
        {text:"Standardizing to canonical ClaimRecord envelope...",type:"info",speed:300},
        {text:"JSON Payload schema validation...",type:"info",speed:200},
        {text:"SUCCESS: Payload conforms to HIPAA claim schemas.",type:"secure",speed:300},
        {text:"Reconciliation Check: Sum matched EOB totals ($450.00).",type:"success",speed:400},
        {text:"Updating claims repository databases...",type:"info",speed:500},
        {text:"Job completed. ClaimRecord envelope outputted.",type:"success",speed:300}
    ],
    heal: [
        {text:"Starting self-healing retrieval process...",type:"info",speed:200},
        {text:"Accessing target BlueCross BlueShield claim portal...",type:"info",speed:400},
        {text:"Exception: selector not found: '#claims-grid-tbody'",type:"error",speed:500},
        {text:"Triggering error classification and recovery logic...",type:"recover",speed:400},
        {text:"Analyzing DOM tree structure layout shifts...",type:"recover",speed:500},
        {text:"Fuzzy match found: 'table.data-grid-claims tbody'",type:"recover",speed:600},
        {text:"Self-healing selector updated. Retrying fetch...",type:"recover",speed:300},
        {text:"Successfully navigated pagination index link.",type:"system",speed:400},
        {text:"Retrieved 15 claim statuses successfully.",type:"success",speed:300},
        {text:"Logging diagnostic coordinates for POM update...",type:"system",speed:350},
        {text:"Job finished safely without manual overhead.",type:"success",speed:200}
    ]
};

const ARCH_NODES = {
    1: {step:"STAGE 1 OF 5",title:"JSON Claims Payload Ingestion",body:"Structured data schemas are generated dynamically by customer ERPs or database triggers, representing claim, patient details, and billing documents. Payload structures are validated by JSON schema validations at ingestion."},
    2: {step:"STAGE 2 OF 5",title:"FastAPI Bot Orchestration Gateway",body:"A high-performance FastAPI routing service receives the JSON payloads, parses the profile parameters, and automatically forwards execution actions to target message queues."},
    3: {step:"STAGE 3 OF 5",title:"AWS SQS Asynchronous Message Broker",body:"AWS SQS queues message requests safely, decoupling API endpoints from selenium/playwright workers. This ensures traffic spikes are flattened and no bot runs are dropped due to concurrent execution limits."},
    4: {step:"STAGE 4 OF 5",title:"AWS ECS Containerized Worker Pool",body:"Docker-packaged worker containers run inside AWS ECS. They autonomously pull task messages from the SQS queue, executing browser automation tasks asynchronously at enterprise scale."},
    5: {step:"STAGE 5 OF 5",title:"Target Commercial Insurance Portals",body:"The bots automate standard browsers to upload claims, extract EOB details, or verify enrollment statuses, uploading audit proof PDFs to AWS S3 and sending API status callbacks."}
};

let selectedBot = "claim", botRunning = false;

function selectBotProfile(p) {
    if (botRunning) return;
    selectedBot = p;
    document.querySelectorAll(".bot-btn").forEach(b => {
        b.className = "bot-btn bot-profile-btn w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-3 group relative overflow-hidden";
        const i = b.querySelector(".bot-indicator");
        if (i) i.className = "bot-indicator absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-transparent";
    });
    
    const ab = document.getElementById("btn-bot-" + p);
    ab.className = "bot-btn bot-active bot-profile-btn-active w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-3 group relative overflow-hidden";
    
    const ai = ab.querySelector(".bot-indicator");
    if (ai) ai.className = "bot-indicator absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-brandBlue";
    
    const fm = {claim: "claim_submitter.py", eob: "eob_data_extractor.py", heal: "self_healing_agent.py"};
    document.getElementById("terminal-title").textContent = "sreerag@orchestrator:~/bots/" + fm[p];
    
    const con = document.getElementById("terminal-console");
    con.innerHTML = '';
    const _sel1 = document.createElement('div');
    _sel1.className = 'text-slate-400 dark:text-slate-600';
    _sel1.textContent = 'Selected: bots/' + fm[p];
    const _sel2 = document.createElement('div');
    _sel2.className = 'text-sky-600 dark:text-sky-400 font-semibold';
    _sel2.textContent = 'Profile loaded. Click "Execute Bot Script" to trigger workflow.';
    con.appendChild(_sel1);
    con.appendChild(_sel2);
    
    document.getElementById("bot-progress-bar").style.width = "0%";
    document.getElementById("bot-progress-pct").textContent = "0%";
    
    const termDot = document.getElementById("terminal-status-dot");
    if (termDot) {
        termDot.className = "w-2 h-2 rounded-full inline-block bg-brandGreen";
    }
    document.getElementById("terminal-status-text").textContent = "READY";
}

function triggerBotExecution() {
    if (botRunning) return;
    botRunning = true;
    
    const rb = document.getElementById("run-bot-btn");
    const playIcon = document.getElementById("btn-icon-play");
    const spinnerIcon = document.getElementById("btn-icon-spinner");
    
    if (playIcon) playIcon.classList.add("hidden");
    if (spinnerIcon) spinnerIcon.classList.remove("hidden");
    
    document.getElementById("btn-text-run").textContent = "Worker running...";
    rb.disabled = true;
    rb.style.opacity = "0.7";
    rb.style.cursor = "not-allowed";
    
    const termDot = document.getElementById("terminal-status-dot");
    if (termDot) {
        termDot.className = "w-2 h-2 rounded-full inline-block bg-yellow-400";
    }
    document.getElementById("terminal-status-text").textContent = "RUNNING";
    
    const con = document.getElementById("terminal-console");
    con.innerHTML = '';
    const _sysDiv = document.createElement('div');
    _sysDiv.className = 'text-slate-400 dark:text-slate-600';
    _sysDiv.textContent = '[SYSTEM] Worker thread allocated. Connecting...';
    con.appendChild(_sysDiv);
    
    const logs = BOT_LOGS[selectedBot];
    let cl = 0;
    
    function nextLine() {
        if (cl < logs.length) {
            const log = logs[cl];
            const div = document.createElement("div");
            const cm = {
                info: "text-slate-500 dark:text-slate-400",
                system: "text-sky-600 dark:text-sky-400",
                secure: "text-fuchsia-600 dark:text-fuchsia-400",
                recover: "text-amber-600 dark:text-amber-400",
                success: "text-emerald-600 dark:text-emerald-400 font-bold",
                error: "text-red-600 dark:text-red-400 font-bold"
            };
            const pm = {
                info: "[INFO]",
                system: "[SYSTEM]",
                secure: "[SECURE]",
                recover: "[RECOVER]",
                success: "[SUCCESS]",
                error: "[ERROR]"
            };
            const ts = new Date().toISOString().substring(11, 19);
            
            const _tsSpan = document.createElement('span');
            _tsSpan.className = 'text-slate-300 dark:text-slate-600';
            _tsSpan.textContent = ts;
            const _logSpan = document.createElement('span');
            _logSpan.className = cm[log.type] || '';
            _logSpan.textContent = pm[log.type] + ' ' + log.text;
            
            div.appendChild(_tsSpan);
            div.appendChild(document.createTextNode(' '));
            div.appendChild(_logSpan);
            
            con.appendChild(div);
            con.scrollTop = con.scrollHeight;
            
            const pct = Math.round(((cl + 1) / logs.length) * 100);
            document.getElementById("bot-progress-bar").style.width = pct + "%";
            document.getElementById("bot-progress-pct").textContent = pct + "%";
            cl++;
            setTimeout(nextLine, log.speed);
        } else {
            botRunning = false;
            rb.disabled = false;
            rb.style.opacity = "1";
            rb.style.cursor = "pointer";
            
            if (playIcon) playIcon.classList.remove("hidden");
            if (spinnerIcon) spinnerIcon.classList.add("hidden");
            
            document.getElementById("btn-text-run").textContent = "Execute Bot Script";
            if (termDot) {
                termDot.className = "w-2 h-2 rounded-full inline-block bg-brandBlue";
            }
            document.getElementById("terminal-status-text").textContent = "COMPLETED";
            
            const fd = document.createElement("div");
            fd.className = "mt-3 p-3 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800/80 text-[10px] font-mono whitespace-pre text-emerald-600 dark:text-emerald-400";
            const jo = {
                claim: '{\n  "claim_id": "CLM-2026-94812",\n  "status": "SUBMITTED",\n  "portal": "UHC_COMMERCIAL",\n  "hipaa_validation": "PASSED",\n  "solver_logs": { "captcha_required": true, "duration_ms": 1400 },\n  "evidence_receipt_s3": "s3://receipts/TX-84729104.pdf"\n}',
                eob: '{\n  "extraction_job_id": "EOB-84712",\n  "status": "SUCCESS",\n  "normalized_envelope": {\n    "claim_reference": "REF-BCBS-38291",\n    "payment_reconciliation": {\n      "total_charged": 600.00,\n      "total_allowed": 450.00,\n      "total_paid": 450.00,\n      "patient_copay": 0.00\n    }\n  }\n}',
                heal: '{\n  "job_id": "RECOVER-847",\n  "status": "HEALED_SUCCESS",\n  "exception_logged": "SelectorNotFound: #claims-grid-tbody",\n  "fuzzy_match": {\n    "original": "#claims-grid-tbody",\n    "healed": "table.data-grid-claims tbody"\n  }\n}'
            };
            fd.textContent = "Output JSON ClaimRecord:\n" + jo[selectedBot];
            con.appendChild(fd);
            con.scrollTop = con.scrollHeight;
        }
    }
    nextLine();
}

function setActiveArchNode(n) {
    document.querySelectorAll("svg g[id^='arch-node-'] rect").forEach(r => r.setAttribute("stroke-width", "1.5"));
    const a = document.getElementById("arch-node-" + n);
    if (a) a.querySelector("rect").setAttribute("stroke-width", "3");
    const d = ARCH_NODES[n];
    document.getElementById("arch-detail-step").textContent = d.step;
    document.getElementById("arch-detail-title").textContent = d.title;
    document.getElementById("arch-detail-body").textContent = d.body;
}

document.addEventListener("DOMContentLoaded", () => {
    const tt = document.getElementById("theme-toggle"), html = document.documentElement;
    
    function applyTheme(t) {
        if (t === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }
    
    applyTheme(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    
    tt.addEventListener("click", () => {
        const n = html.classList.contains("dark") ? "light" : "dark";
        applyTheme(n);
        localStorage.setItem("theme", n);
    });
    
    const mmb = document.getElementById("mobile-menu-toggle"), mm = document.getElementById("mobile-menu");
    mmb.addEventListener("click", () => {
        mm.classList.toggle("hidden");
        mmb.setAttribute("aria-expanded", String(!mm.classList.contains("hidden")));
    });
    
    document.querySelectorAll(".mobile-nav-link").forEach(l => l.addEventListener("click", () => {
        mm.classList.add("hidden");
        mmb.setAttribute("aria-expanded", "false");
    }));
    
    document.addEventListener("click", e => {
        if (!mmb.contains(e.target) && !mm.contains(e.target)) {
            mm.classList.add("hidden");
            mmb.setAttribute("aria-expanded", "false");
        }
    });
    
    const el = document.getElementById("typing-text");
    const roles = ["RPA Process Automations", "FastAPI Orchestration Layers", "AWS Serverless Worker Pools", "Self-Healing Scraper Engines"];
    let ri = 0, ci = 0, del = false, sp = 100;
    
    function tw() {
        const cur = roles[ri];
        el.textContent = del ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
        if (del) {
            ci--;
            sp = 40;
        } else {
            ci++;
            sp = 90;
        }
        if (!del && ci === cur.length) {
            del = true;
            sp = 2200;
        } else if (del && ci === 0) {
            del = false;
            ri = (ri + 1) % roles.length;
            sp = 500;
        }
        setTimeout(tw, sp);
    }
    
    tw();
    
    // Supabase serverless logging configuration
    const SUPABASE_URL = "https://jdgitfslhkllqznwycrg.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_O2fCotryD1GtN7Vvr49ZgA_PhgiGygX";
    const hasSupabase = SUPABASE_URL && SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY";

    const form = document.getElementById("contact-form"), sb = document.getElementById("submit-btn");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const n = document.getElementById("name").value, em = document.getElementById("email").value, s = document.getElementById("subject").value, m = document.getElementById("message").value;
            sb.disabled = true;
            const orig = sb.innerHTML;
            sb.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';

            const promises = [];

            // 1. Log to Supabase database (if configured)
            if (hasSupabase) {
                promises.push(
                    fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
                        method: "POST",
                        headers: {
                            "apikey": SUPABASE_ANON_KEY,
                            "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                            "Content-Type": "application/json",
                            "Prefer": "return=minimal"
                        },
                        body: JSON.stringify({ name: n, email: em, subject: s, message: m, is_unique_visit: false })
                    }).catch(err => console.error("Database logging failed:", err))
                );
            }

            // 2. Send email notification via Formspree
            promises.push(
                fetch("https://formspree.io/f/mrengeod", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({ name: n, email: em, subject: s, message: m })
                })
            );

            Promise.all(promises)
                .then(results => {
                    sb.disabled = false;
                    sb.innerHTML = orig;
                    
                    // Formspree result is the last item
                    const formspreeRes = results[results.length - 1];
                    if (formspreeRes && formspreeRes.ok) {
                        form.classList.add("hidden");
                        const successCard = document.getElementById("contact-success");
                        if (successCard) successCard.classList.remove("hidden");
                        form.reset();
                    } else {
                        alert("Something went wrong with the email delivery. Please email me directly at sreerageg@gmail.com");
                    }
                })
                .catch(() => {
                    sb.disabled = false;
                    sb.innerHTML = orig;
                    window.location.href = "mailto:sreerageg@gmail.com?subject=" + encodeURIComponent(s) + "&body=" + encodeURIComponent("Name: " + n + "\nEmail: " + em + "\n\nMessage:\n" + m);
                });
        });
    }

    const successCard = document.getElementById("contact-success"),
          sendAnotherBtn = document.getElementById("send-another-btn");
    if (sendAnotherBtn && successCard && form) {
        sendAnotherBtn.addEventListener("click", () => {
            successCard.classList.add("hidden");
            form.classList.remove("hidden");
        });
    }

    const secs = document.querySelectorAll("section[id]"), nls = document.querySelectorAll(".nav-link");
    function updateNav() {
        let cur = "";
        secs.forEach(s => {
            if (window.scrollY >= s.offsetTop - 180) cur = s.id;
        });
        nls.forEach(l => {
            l.classList.remove("active");
            if (l.getAttribute("href") === "#" + cur) l.classList.add("active");
        });
    }
    window.addEventListener("scroll", updateNav, {passive: true});
    updateNav();
    
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
            }
        });
    }, {threshold: 0.1, rootMargin: "0px 0px -60px 0px"});
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

    // Handle anonymous page logging & total counter
    if (hasSupabase) {
        const fetchCounts = () => {
            const VC_KEY = "portfolio_visitor_count";
            const VC_TIME_KEY = "portfolio_visitor_count_time";
            const VC_TTL = 3600000; // 1 hour in ms
            const cached = sessionStorage.getItem(VC_KEY);
            const cachedTime = sessionStorage.getItem(VC_TIME_KEY);
            if (cached !== null && cachedTime && (Date.now() - parseInt(cachedTime)) < VC_TTL) {
                const badge = document.getElementById("visitor-count-badge");
                const val = document.getElementById("visitor-count-val");
                if (badge && val) {
                    val.innerHTML = `<span class="text-brandBlue font-semibold">${cached} views</span>`;
                    badge.classList.remove("hidden");
                }
                return;
            }
            fetch(`${SUPABASE_URL}/rest/v1/visitors?is_unique_visit=eq.true&select=id`, {
                method: "GET",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "Prefer": "count=exact"
                }
            })
                .then(r => {
                    const range = r.headers.get("content-range");
                    const uniqueCount = range ? range.split("/")[1] : "0";
                    sessionStorage.setItem(VC_KEY, uniqueCount);
                    sessionStorage.setItem(VC_TIME_KEY, Date.now().toString());
                    const badge = document.getElementById("visitor-count-badge");
                    const val = document.getElementById("visitor-count-val");
                    if (badge && val) {
                        val.innerHTML = `<span class="text-brandBlue font-semibold">${uniqueCount} views</span>`;
                        badge.classList.remove("hidden");
                    }
                })
                .catch(err => console.error("Database count query failed:", err));
        };

        const hasVisited = localStorage.getItem("has_visited_portfolio");
        if (!hasVisited) {
            fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({ is_unique_visit: true })
            }).then(res => {
                if (res.ok) localStorage.setItem("has_visited_portfolio", "true");
            }).catch(err => console.error("Database unique logging failed:", err))
            .finally(() => fetchCounts());
        } else {
            fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({ is_unique_visit: false })
            }).catch(err => console.error("Database repeat logging failed:", err))
            .finally(() => fetchCounts());
        }
    }
});
