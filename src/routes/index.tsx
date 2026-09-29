{/* ── COMMENT ÇA MARCHE ── */}
<section className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
  <div className="container mx-auto px-8 md:px-16">
    <div className="text-center mb-10 md:mb-14">
      <h2 className="text-2xl md:text-4xl font-bold text-white">
        Comment ça marche ?
      </h2>
      <p className="text-white/60 mt-3 text-sm md:text-base">Simple, rapide et sécurisé</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
      <div className="md:pr-8">
        <h3 className="text-lg md:text-xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-2">
          <Camera className="h-5 w-5" />Pour les photographes
        </h3>
        <div className="space-y-5 md:space-y-6">
          {[
            { n: "1", t: "Créez votre compte photographe", d: "Inscrivez-vous gratuitement et configurez votre profil en quelques minutes." },
            { n: "2", t: "Publiez votre portfolio", d: "Ajoutez vos meilleurs albums pour attirer de nouveaux clients." },
            { n: "3", t: "Recevez des réservations", d: "Les clients vous contactent directement depuis votre profil public." },
            { n: "4", t: "Livrez les photos", d: "Créez une galerie privée avec code d'accès pour chaque client." },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 grid place-items-center font-bold text-white text-sm">
                {s.n}
              </div>
              <div>
                <p className="font-semibold text-white text-sm md:text-base">{s.t}</p>
                <p className="text-white/60 text-xs md:text-sm mt-1">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:pl-8">
        <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-6 md:mb-8 flex items-center gap-2 mt-8 md:mt-0">
          <Users className="h-5 w-5" />Pour les clients
        </h3>
        <div className="space-y-5 md:space-y-6">
          {[
            { n: "1", t: "Découvrez les photographes", d: "Parcourez les portfolios et trouvez le style qui correspond à votre projet." },
            { n: "2", t: "Réservez en ligne", d: "Envoyez une demande de réservation avec la date, le lieu et vos besoins." },
            { n: "3", t: "Recevez votre code", d: "Après la séance, recevez un code d'accès unique par email." },
            { n: "4", t: "Téléchargez vos photos", d: "Accédez à votre galerie privée et téléchargez vos photos en haute qualité." },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 grid place-items-center font-bold text-white text-sm">
                {s.n}
              </div>
              <div>
                <p className="font-semibold text-white text-sm md:text-base">{s.t}</p>
                <p className="text-white/60 text-xs md:text-sm mt-1">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>