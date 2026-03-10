import React, { useState, useRef } from 'react';
import { Users, ThumbsUp, ThumbsDown, Minus, Twitter, FileText, Youtube, Mic, Newspaper, Plus, X, Search, Download, Camera, User, Briefcase, GraduationCap, Building } from 'lucide-react';

const IndonesiaForeignPolicyTracker = () => {
  const [opinions, setOpinions] = useState([
    {
      id: 1,
      name: "Retno Marsudi",
      nameId: "Retno Marsudi",
      title: "Minister of Foreign Affairs",
      titleId: "Menteri Luar Negeri",
      category: "Government Official",
      position: "neutral-positive",
      stance: "Strategic Non-Alignment with Economic Pragmatism",
      stanceId: "Non-Blok Strategis dengan Pragmatisme Ekonomi",
      summary: "Indonesia should explore BRICS opportunities while maintaining independent foreign policy and not picking sides in great power competition.",
      summaryId: "Indonesia harus mengeksplorasi peluang BRICS sambil mempertahankan kebijakan luar negeri yang bebas aktif dan tidak memihak dalam persaingan kekuatan besar.",
      arguments: [
        { en: "BRICS offers economic opportunities for Global South", id: "BRICS menawarkan peluang ekonomi untuk Global South" },
        { en: "Must maintain bebas-aktif principle", id: "Harus mempertahankan prinsip bebas-aktif" },
        { en: "Indonesia can benefit without full alignment", id: "Indonesia bisa mendapat manfaat tanpa alignment penuh" }
      ],
      sources: [
        { type: "statement", title: "Press Conference on BRICS Consideration", titleId: "Konferensi Pers tentang Pertimbangan BRICS", platform: "Ministry of Foreign Affairs", date: "2024-01-15", language: "id" },
        { type: "interview", title: "Interview with CNN Indonesia", titleId: "Wawancara dengan CNN Indonesia", platform: "CNN Indonesia", date: "2024-01-20", language: "id" }
      ],
      x: 60,
      y: 35
    },
    {
      id: 2,
      name: "Rizal Sukma",
      nameId: "Rizal Sukma",
      title: "Executive Director, CSIS Indonesia",
      titleId: "Direktur Eksekutif, CSIS Indonesia",
      category: "Academic/Think Tank",
      position: "neutral-cautious",
      stance: "Proceed with Caution",
      stanceId: "Lanjutkan dengan Hati-hati",
      summary: "BRICS membership could complicate Indonesia's relationships with traditional partners. Need careful cost-benefit analysis.",
      summaryId: "Keanggotaan BRICS dapat memperumit hubungan Indonesia dengan mitra tradisional. Perlu analisis biaya-manfaat yang cermat.",
      arguments: [
        { en: "Risk of being seen as anti-Western", id: "Risiko dianggap anti-Barat" },
        { en: "BRICS internal divisions are significant", id: "Perpecahan internal BRICS signifikan" },
        { en: "Economic benefits unclear vs diplomatic costs", id: "Manfaat ekonomi tidak jelas vs biaya diplomatik" },
        { en: "Indonesia's middle power status requires balance", id: "Status middle power Indonesia memerlukan keseimbangan" }
      ],
      sources: [
        { type: "article", title: "Indonesia and BRICS: A Strategic Assessment", titleId: "Indonesia dan BRICS: Penilaian Strategis", platform: "The Jakarta Post", date: "2024-02-01", language: "en" },
        { type: "article", title: "Dilema BRICS bagi Indonesia", titleId: "Dilema BRICS bagi Indonesia", platform: "Kompas", date: "2024-02-05", language: "id" }
      ],
      x: 45,
      y: 55
    },
    {
      id: 3,
      name: "Luhut Binsar Pandjaitan",
      nameId: "Luhut Binsar Pandjaitan",
      title: "Coordinating Minister for Maritime and Investment Affairs",
      titleId: "Menteri Koordinator Bidang Kemaritiman dan Investasi",
      category: "Government Official",
      position: "supportive",
      stance: "Economic Opportunity Priority",
      stanceId: "Prioritas Peluang Ekonomi",
      summary: "BRICS membership opens massive investment and trade opportunities. Indonesia must secure its economic future.",
      summaryId: "Keanggotaan BRICS membuka peluang investasi dan perdagangan yang besar. Indonesia harus mengamankan masa depan ekonominya.",
      arguments: [
        { en: "Access to BRICS New Development Bank funding", id: "Akses ke pendanaan BRICS New Development Bank" },
        { en: "Diversify economic partnerships beyond West", id: "Diversifikasi kemitraan ekonomi di luar Barat" },
        { en: "Align with rising economies", id: "Selaras dengan ekonomi yang sedang berkembang" },
        { en: "Strengthen bargaining position globally", id: "Perkuat posisi tawar secara global" }
      ],
      sources: [
        { type: "statement", title: "Cabinet Meeting Statement", titleId: "Pernyataan Rapat Kabinet", platform: "Government Press Release", date: "2024-01-25", language: "id" },
        { type: "interview", title: "Bloomberg Interview on BRICS", titleId: "Wawancara Bloomberg tentang BRICS", platform: "Bloomberg TV", date: "2024-02-10", language: "en" }
      ],
      x: 75,
      y: 30
    },
    {
      id: 4,
      name: "Dino Patti Djalal",
      nameId: "Dino Patti Djalal",
      title: "Former Indonesian Ambassador to US",
      titleId: "Mantan Duta Besar Indonesia untuk AS",
      category: "Former Official",
      position: "against",
      stance: "Risk to Western Partnerships",
      stanceId: "Risiko terhadap Kemitraan Barat",
      summary: "Joining BRICS would damage Indonesia's relationships with US, EU, and traditional allies. Not worth the risk.",
      summaryId: "Bergabung dengan BRICS akan merusak hubungan Indonesia dengan AS, UE, dan sekutu tradisional. Tidak sebanding dengan risikonya.",
      arguments: [
        { en: "US is Indonesia's largest investor", id: "AS adalah investor terbesar Indonesia" },
        { en: "BRICS is increasingly anti-Western bloc", id: "BRICS semakin menjadi blok anti-Barat" },
        { en: "Could jeopardize security partnerships", id: "Dapat membahayakan kemitraan keamanan" },
        { en: "ASEAN centrality should be priority", id: "Sentralitas ASEAN harus menjadi prioritas" }
      ],
      sources: [
        { type: "article", title: "Why Indonesia Should Stay Away from BRICS", titleId: "Mengapa Indonesia Harus Menjauhi BRICS", platform: "Foreign Policy Indonesia", date: "2024-01-30", language: "en" },
        { type: "podcast", title: "Podcast Diplomatik", titleId: "Podcast Diplomatik", platform: "Spotify", date: "2024-02-08", language: "id" }
      ],
      x: 20,
      y: 40
    },
    {
      id: 5,
      name: "Rocky Gerung",
      nameId: "Rocky Gerung",
      title: "Political Analyst & Public Intellectual",
      titleId: "Analis Politik & Intelektual Publik",
      category: "Public Commentator",
      position: "against",
      stance: "Ideological Incompatibility",
      stanceId: "Ketidakcocokan Ideologi",
      summary: "BRICS represents authoritarian alignment. Indonesia's democratic values incompatible with China-Russia led bloc.",
      summaryId: "BRICS mewakili alignment otoritarian. Nilai-nilai demokrasi Indonesia tidak kompatibel dengan blok yang dipimpin China-Rusia.",
      arguments: [
        { en: "Democratic backsliding risk", id: "Risiko kemunduran demokrasi" },
        { en: "China's influence threatens sovereignty", id: "Pengaruh China mengancam kedaulatan" },
        { en: "Goes against Reformasi values", id: "Bertentangan dengan nilai-nilai Reformasi" },
        { en: "Will embolden domestic authoritarianism", id: "Akan memperkuat otoritarianisme domestik" }
      ],
      sources: [
        { type: "video", title: "ILC Analysis on BRICS", titleId: "Analisis ILC tentang BRICS", platform: "YouTube - TV One", date: "2024-02-03", language: "id" },
        { type: "twitter", title: "Thread on BRICS dangers", titleId: "Thread tentang bahaya BRICS", platform: "Twitter/X", date: "2024-02-12", language: "id" }
      ],
      x: 15,
      y: 50
    },
    {
      id: 6,
      name: "Hikmahanto Juwana",
      nameId: "Hikmahanto Juwana",
      title: "Professor of International Law, Universitas Indonesia",
      titleId: "Profesor Hukum Internasional, Universitas Indonesia",
      category: "Academic/Think Tank",
      position: "neutral",
      stance: "Legal and Institutional Analysis",
      stanceId: "Analisis Hukum dan Kelembagaan",
      summary: "Decision must be based on legal framework and institutional obligations. Need thorough analysis of treaty implications.",
      summaryId: "Keputusan harus didasarkan pada kerangka hukum dan kewajiban kelembagaan. Perlu analisis menyeluruh tentang implikasi perjanjian.",
      arguments: [
        { en: "Must review existing treaty obligations", id: "Harus meninjau kewajiban perjanjian yang ada" },
        { en: "BRICS legal framework still developing", id: "Kerangka hukum BRICS masih berkembang" },
        { en: "WTO commitments must be considered", id: "Komitmen WTO harus dipertimbangkan" },
        { en: "Domestic legal ratification required", id: "Ratifikasi hukum domestik diperlukan" }
      ],
      sources: [
        { type: "article", title: "Legal Implications of BRICS Membership", titleId: "Implikasi Hukum Keanggotaan BRICS", platform: "Jurnal Hukum Internasional", date: "2024-01-28", language: "id" },
        { type: "seminar", title: "Seminar at Faculty of Law UI", titleId: "Seminar di Fakultas Hukum UI", platform: "Universitas Indonesia", date: "2024-02-06", language: "id" }
      ],
      x: 50,
      y: 65
    }
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('en');
  const mapRef = useRef(null);

  // New person form state
  const [newPerson, setNewPerson] = useState({
    name: '',
    nameId: '',
    title: '',
    titleId: '',
    category: 'Academic/Think Tank',
    position: 'neutral',
    stance: '',
    stanceId: '',
    summary: '',
    summaryId: '',
    arguments: [{ en: '', id: '' }],
    sources: [{ type: 'article', title: '', titleId: '', platform: '', date: '', language: 'en' }],
    x: 50,
    y: 50
  });

  const categories = [
    'Government Official',
    'Former Official',
    'Academic/Think Tank',
    'Public Commentator',
    'Business Leader',
    'Journalist',
    'Civil Society'
  ];

  const getPositionColor = (position) => {
    switch(position) {
      case 'supportive': return 'bg-green-500';
      case 'neutral-positive': return 'bg-teal-500';
      case 'neutral': return 'bg-gray-500';
      case 'neutral-cautious': return 'bg-yellow-500';
      case 'against': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPositionIcon = (position) => {
    if (position.includes('supportive') || position.includes('positive')) return <ThumbsUp className="w-4 h-4" />;
    if (position.includes('against')) return <ThumbsDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getSourceIcon = (type) => {
    switch(type) {
      case 'twitter': return <Twitter className="w-3 h-3" />;
      case 'video': return <Youtube className="w-3 h-3" />;
      case 'podcast': return <Mic className="w-3 h-3" />;
      case 'interview': return <Newspaper className="w-3 h-3" />;
      default: return <FileText className="w-3 h-3" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Government Official': return <Building className="w-4 h-4" />;
      case 'Former Official': return <Briefcase className="w-4 h-4" />;
      case 'Academic/Think Tank': return <GraduationCap className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const filteredOpinions = opinions.filter(o => {
    const matchesPosition = filter === 'all' || o.position === filter;
    const matchesCategory = categoryFilter === 'all' || o.category === categoryFilter;
    const matchesSearch = searchTerm === '' || 
      o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.nameId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.titleId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosition && matchesCategory && matchesSearch;
  });

  const addNewPerson = () => {
    if (!newPerson.name || !newPerson.title || !newPerson.stance || !newPerson.summary) {
      alert('Please fill in all required fields (Name, Title, Stance, Summary)');
      return;
    }

    const personToAdd = {
      ...newPerson,
      id: Date.now(),
      arguments: newPerson.arguments.filter(arg => arg.en || arg.id),
      sources: newPerson.sources.filter(src => src.title || src.titleId)
    };

    setOpinions([...opinions, personToAdd]);
    setShowAddForm(false);
    setNewPerson({
      name: '',
      nameId: '',
      title: '',
      titleId: '',
      category: 'Academic/Think Tank',
      position: 'neutral',
      stance: '',
      stanceId: '',
      summary: '',
      summaryId: '',
      arguments: [{ en: '', id: '' }],
      sources: [{ type: 'article', title: '', titleId: '', platform: '', date: '', language: 'en' }],
      x: 50,
      y: 50
    });
  };

  const exportAsPDF = () => {
    alert('PDF export functionality would require a backend service. For now, use the screenshot button or browser print (Ctrl/Cmd + P) to save as PDF.');
  };

  const takeScreenshot = async () => {
    if (mapRef.current) {
      try {
        // This is a placeholder - actual implementation would use html2canvas or similar
        alert('Screenshot functionality would require the html2canvas library. For now, use your browser\'s screenshot tool or Snipping Tool.');
      } catch (err) {
        console.error('Screenshot failed:', err);
      }
    }
  };

  const t = (en, id) => language === 'en' ? en : id;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="max-w-[1800px] mx-auto p-6">
        {/* Header */}
        <div className="mb-6 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {t('Indonesia Foreign Policy Opinion Tracker', 'Pelacak Opini Kebijakan Luar Negeri Indonesia')}
              </h1>
              <p className="text-slate-600">
                {t('Issue: Indonesia Joining BRICS', 'Isu: Indonesia Bergabung dengan BRICS')}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all"
              >
                {language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
              </button>
              <button
                onClick={takeScreenshot}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                {t('Screenshot', 'Tangkapan Layar')}
              </button>
              <button
                onClick={exportAsPDF}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('Export PDF', 'Ekspor PDF')}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={t('Search by name or title...', 'Cari berdasarkan nama atau jabatan...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-slate-900">{opinions.length}</div>
              <div className="text-xs text-slate-600">{t('Total Figures', 'Total Tokoh')}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-700">{opinions.filter(o => o.position === 'supportive').length}</div>
              <div className="text-xs text-green-700">{t('Supportive', 'Mendukung')}</div>
            </div>
            <div className="bg-teal-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-teal-700">{opinions.filter(o => o.position === 'neutral-positive').length}</div>
              <div className="text-xs text-teal-700">{t('Neutral-Positive', 'Netral-Positif')}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-700">{opinions.filter(o => o.position === 'neutral').length}</div>
              <div className="text-xs text-gray-700">{t('Neutral', 'Netral')}</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-700">{opinions.filter(o => o.position === 'neutral-cautious').length}</div>
              <div className="text-xs text-yellow-700">{t('Cautious', 'Hati-hati')}</div>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-red-700">{opinions.filter(o => o.position === 'against').length}</div>
              <div className="text-xs text-red-700">{t('Against', 'Menolak')}</div>
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-bold text-slate-700 mb-2">{t('Filter by Position:', 'Filter berdasarkan Posisi:')}</h3>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('All', 'Semua')}
                </button>
                <button
                  onClick={() => setFilter('supportive')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'supportive' ? 'bg-green-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('Supportive', 'Mendukung')}
                </button>
                <button
                  onClick={() => setFilter('neutral-positive')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'neutral-positive' ? 'bg-teal-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('Neutral-Positive', 'Netral-Positif')}
                </button>
                <button
                  onClick={() => setFilter('neutral')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'neutral' ? 'bg-gray-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('Neutral', 'Netral')}
                </button>
                <button
                  onClick={() => setFilter('neutral-cautious')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'neutral-cautious' ? 'bg-yellow-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('Cautious', 'Hati-hati')}
                </button>
                <button
                  onClick={() => setFilter('against')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === 'against' ? 'bg-red-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('Against', 'Menolak')}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700 mb-2">{t('Filter by Category:', 'Filter berdasarkan Kategori:')}</h3>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    categoryFilter === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {t('All Categories', 'Semua Kategori')}
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      categoryFilter === cat ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Map Visualization */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-6 relative" style={{ minHeight: '600px' }} ref={mapRef}>
            <div className="absolute top-4 left-4 text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">
              <div>← {t('More Critical', 'Lebih Kritis')}</div>
            </div>
            <div className="absolute top-4 right-4 text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">
              <div>{t('More Supportive', 'Lebih Mendukung')} →</div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">
              <div>{t('Different Analytical Frameworks', 'Kerangka Analisis Berbeda')}</div>
            </div>

            {/* Opinion nodes */}
            <div className="relative w-full h-full" style={{ minHeight: '550px' }}>
              {filteredOpinions.map((opinion) => (
                <div
                  key={opinion.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
                  style={{ left: `${opinion.x}%`, top: `${opinion.y}%` }}
                  onClick={() => setSelectedPerson(opinion)}
                >
                  <div className={`${getPositionColor(opinion.position)} rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow relative ${selectedPerson?.id === opinion.id ? 'ring-4 ring-blue-400' : ''}`}>
                    {getPositionIcon(opinion.position)}
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="text-xs font-semibold text-slate-900 bg-white px-2 py-1 rounded shadow">
                      {language === 'en' ? opinion.name : opinion.nameId || opinion.name}
                    </div>
                  </div>
                </div>
              ))}

              {filteredOpinions.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-slate-400">{t('No results found', 'Tidak ada hasil ditemukan')}</p>
                </div>
              )}
            </div>

            {/* Add Person Button */}
            <button
              onClick={() => setShowAddForm(true)}
              className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>

          {/* Detail Panel */}
          <div className="w-96 bg-white rounded-xl shadow-lg p-6 overflow-y-auto" style={{ maxHeight: '600px' }}>
            {selectedPerson ? (
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      {language === 'en' ? selectedPerson.name : selectedPerson.nameId || selectedPerson.name}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      {language === 'en' ? selectedPerson.title : selectedPerson.titleId || selectedPerson.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-white text-xs font-medium ${getPositionColor(selectedPerson.position)}`}>
                        {getPositionIcon(selectedPerson.position)}
                        <span>{selectedPerson.position.replace('-', ' ')}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                        {getCategoryIcon(selectedPerson.category)}
                        <span>{selectedPerson.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-bold text-slate-700 mb-1">
                    {t('Core Stance:', 'Sikap Inti:')}
                  </h3>
                  <p className="text-lg font-semibold text-slate-900">
                    {language === 'en' ? selectedPerson.stance : selectedPerson.stanceId || selectedPerson.stance}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-bold text-slate-700 mb-1">
                    {t('Summary:', 'Ringkasan:')}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {language === 'en' ? selectedPerson.summary : selectedPerson.summaryId || selectedPerson.summary}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-bold text-slate-700 mb-2">
                    {t('Key Arguments:', 'Argumen Utama:')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedPerson.arguments.map((arg, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{language === 'en' ? arg.en : arg.id || arg.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">
                    {t('Sources:', 'Sumber:')}
                  </h3>
                  <div className="space-y-2">
                    {selectedPerson.sources.map((source, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          {getSourceIcon(source.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-slate-900">
                              {language === 'en' ? source.title : source.titleId || source.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">{source.platform}</p>
                            {source.date && (
                              <p className="text-xs text-slate-400 mt-0.5">{source.date}</p>
                            )}
                          </div>
                          <span className="text-xs text-slate-400 uppercase">{source.language}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-sm">
                    {t('Click on any figure to see their position, arguments, and sources', 
                       'Klik tokoh mana pun untuk melihat posisi, argumen, dan sumbernya')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-bold text-slate-700 mb-3">
            {t('Position Legend', 'Legenda Posisi')}
          </h3>
          <div className="flex gap-6 flex-wrap text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-red-500 w-4 h-4 rounded-full"></div>
              <span className="text-slate-600">{t('Against / Critical', 'Menolak / Kritis')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
              <span className="text-slate-600">{t('Neutral-Cautious', 'Netral-Hati-hati')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-500 w-4 h-4 rounded-full"></div>
              <span className="text-slate-600">{t('Neutral', 'Netral')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 w-4 h-4 rounded-full"></div>
              <span className="text-slate-600">{t('Neutral-Positive', 'Netral-Positif')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 w-4 h-4 rounded-full"></div>
              <span className="text-slate-600">{t('Supportive', 'Mendukung')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Person Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                {t('Add New Figure', 'Tambah Tokoh Baru')}
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Name (English)', 'Nama (Inggris)')} *
                  </label>
                  <input
                    type="text"
                    value={newPerson.name}
                    onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Name (Indonesian)', 'Nama (Indonesia)')}
                  </label>
                  <input
                    type="text"
                    value={newPerson.nameId}
                    onChange={(e) => setNewPerson({...newPerson, nameId: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Title (English)', 'Jabatan (Inggris)')} *
                  </label>
                  <input
                    type="text"
                    value={newPerson.title}
                    onChange={(e) => setNewPerson({...newPerson, title: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Minister of..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Title (Indonesian)', 'Jabatan (Indonesia)')}
                  </label>
                  <input
                    type="text"
                    value={newPerson.titleId}
                    onChange={(e) => setNewPerson({...newPerson, titleId: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Menteri..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Category', 'Kategori')} *
                  </label>
                  <select
                    value={newPerson.category}
                    onChange={(e) => setNewPerson({...newPerson, category: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Position', 'Posisi')} *
                  </label>
                  <select
                    value={newPerson.position}
                    onChange={(e) => setNewPerson({...newPerson, position: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="supportive">{t('Supportive', 'Mendukung')}</option>
                    <option value="neutral-positive">{t('Neutral-Positive', 'Netral-Positif')}</option>
                    <option value="neutral">{t('Neutral', 'Netral')}</option>
                    <option value="neutral-cautious">{t('Neutral-Cautious', 'Netral-Hati-hati')}</option>
                    <option value="against">{t('Against', 'Menolak')}</option>
                  </select>
                </div>
              </div>

              {/* Stance */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Core Stance (English)', 'Sikap Inti (Inggris)')} *
                  </label>
                  <input
                    type="text"
                    value={newPerson.stance}
                    onChange={(e) => setNewPerson({...newPerson, stance: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief stance title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Core Stance (Indonesian)', 'Sikap Inti (Indonesia)')}
                  </label>
                  <input
                    type="text"
                    value={newPerson.stanceId}
                    onChange={(e) => setNewPerson({...newPerson, stanceId: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Judul sikap singkat"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Summary (English)', 'Ringkasan (Inggris)')} *
                  </label>
                  <textarea
                    value={newPerson.summary}
                    onChange={(e) => setNewPerson({...newPerson, summary: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief summary of their position..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t('Summary (Indonesian)', 'Ringkasan (Indonesia)')}
                  </label>
                  <textarea
                    value={newPerson.summaryId}
                    onChange={(e) => setNewPerson({...newPerson, summaryId: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Ringkasan singkat posisi mereka..."
                  />
                </div>
              </div>

              {/* Arguments */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Key Arguments', 'Argumen Utama')}
                </label>
                {newPerson.arguments.map((arg, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 mb-2">
                    <input
                      type="text"
                      value={arg.en}
                      onChange={(e) => {
                        const updated = [...newPerson.arguments];
                        updated[idx].en = e.target.value;
                        setNewPerson({...newPerson, arguments: updated});
                      }}
                      className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Argument (English)"
                    />
                    <input
                      type="text"
                      value={arg.id}
                      onChange={(e) => {
                        const updated = [...newPerson.arguments];
                        updated[idx].id = e.target.value;
                        setNewPerson({...newPerson, arguments: updated});
                      }}
                      className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Argumen (Indonesia)"
                    />
                  </div>
                ))}
                <button
                  onClick={() => setNewPerson({...newPerson, arguments: [...newPerson.arguments, { en: '', id: '' }]})}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  + {t('Add Argument', 'Tambah Argumen')}
                </button>
              </div>

              {/* Sources */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Sources', 'Sumber')}
                </label>
                {newPerson.sources.map((source, idx) => (
                  <div key={idx} className="space-y-2 mb-4 p-4 bg-slate-50 rounded-lg">
                    <div className="grid grid-cols-3 gap-2">
                      <select
                        value={source.type}
                        onChange={(e) => {
                          const updated = [...newPerson.sources];
                          updated[idx].type = e.target.value;
                          setNewPerson({...newPerson, sources: updated});
                        }}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="article">Article</option>
                        <option value="statement">Statement</option>
                        <option value="interview">Interview</option>
                        <option value="video">Video</option>
                        <option value="podcast">Podcast</option>
                        <option value="twitter">Twitter/X</option>
                        <option value="seminar">Seminar</option>
                      </select>
                      <input
                        type="text"
                        value={source.platform}
                        onChange={(e) => {
                          const updated = [...newPerson.sources];
                          updated[idx].platform = e.target.value;
                          setNewPerson({...newPerson, sources: updated});
                        }}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Platform"
                      />
                      <input
                        type="date"
                        value={source.date}
                        onChange={(e) => {
                          const updated = [...newPerson.sources];
                          updated[idx].date = e.target.value;
                          setNewPerson({...newPerson, sources: updated});
                        }}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={source.title}
                        onChange={(e) => {
                          const updated = [...newPerson.sources];
                          updated[idx].title = e.target.value;
                          setNewPerson({...newPerson, sources: updated});
                        }}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Title (English)"
                      />
                      <input
                        type="text"
                        value={source.titleId}
                        onChange={(e) => {
                          const updated = [...newPerson.sources];
                          updated[idx].titleId = e.target.value;
                          setNewPerson({...newPerson, sources: updated});
                        }}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Judul (Indonesia)"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setNewPerson({...newPerson, sources: [...newPerson.sources, { type: 'article', title: '', titleId: '', platform: '', date: '', language: 'en' }]})}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  + {t('Add Source', 'Tambah Sumber')}
                </button>
              </div>

              {/* Position on map */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Position on Map (X: 0-100, Y: 0-100)', 'Posisi di Peta (X: 0-100, Y: 0-100)')}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">X (Left ← → Right)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={newPerson.x}
                      onChange={(e) => setNewPerson({...newPerson, x: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Y (Top ↑ ↓ Bottom)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={newPerson.y}
                      onChange={(e) => setNewPerson({...newPerson, y: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={addNewPerson}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
                >
                  {t('Add Figure', 'Tambah Tokoh')}
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-300 transition-all"
                >
                  {t('Cancel', 'Batal')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndonesiaForeignPolicyTracker;
