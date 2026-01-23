import Header from "@/components/Header";
import CTAFooterSection from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

type ServiceInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesBySlug: Record<string, ServiceInfo> = useMemo(
    () => ({
      "fuel-management": {
        title: "Fuel Management",
        subtitle: "Solutions Complètes",
        description:
          "Gestion complète du carburant pour vos opérations minières et industrielles : approvisionnement, stockage, contrôle qualité et suivi.",
      },
      "transit-douanes": {
        title: "Transit & Douanes",
        subtitle: "Support Complet",
        description:
          "Accompagnement sur les formalités de transit et de douane, pour sécuriser vos importations/exportations et réduire les délais.",
      },
      "transport-maritime": {
        title: "Transport Maritime",
        subtitle: "Import & Export",
        description:
          "Organisation et coordination de vos opérations maritimes : planning, documentation, conformité et suivi jusqu'à destination.",
      },
      "transport-routier": {
        title: "Transport Routier",
        subtitle: "Matières Premières",
        description:
          "Transport routier adapté aux contraintes terrain, avec un focus sur la sécurité, la ponctualité et la continuité des opérations.",
      },
      "conception-cuves": {
        title: "Conception Cuves",
        subtitle: "Sur Mesure",
        description:
          "Étude et conception de cuves sur mesure selon vos besoins : capacité, contraintes de site, normes et exploitation.",
      },
      "logistique-miniere": {
        title: "Logistique Minière",
        subtitle: "Solutions Intégrées",
        description:
          "Solutions logistiques intégrées pour la chaîne d'approvisionnement minière : coordination, optimisation, conformité et reporting.",
      },
      "equipements-lourds": {
        title: "Équipements Lourds",
        subtitle: "Transport Spécialisé",
        description:
          "Transport spécialisé d'équipements lourds : planification, sécurisation, convoi exceptionnel et opérations sur site.",
      },
    }),
    [],
  );

  const service = slug ? servicesBySlug[slug] : undefined;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto px-8">
          {!service ? (
            <div className="py-16">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Service introuvable</h1>
              <p className="mt-4 text-gray-600">
                Le service demandé n'existe pas (ou l'URL est incorrecte).
              </p>
              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6">
                  <a href="/">Retour à l'accueil</a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="py-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                    SERVICE
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{service.title}</h1>
                <p className="mt-3 text-lg text-gray-600">{service.subtitle}</p>

                <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>

                  <div className="mt-8">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6">
                      Demander un devis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <CTAFooterSection />
    </div>
  );
};

export default ServiceDetail;
