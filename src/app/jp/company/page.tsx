import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { SITE } from "@/lib/site";

export default function Page() {
  return (
    <main>
      <Section kicker="COMPANY" title="会社情報" subtitle="日本法人として責任を持ってプロジェクトを統括します。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">会社名</div>
            <div className="mt-2 text-sm text-muted">Aradia株式会社</div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">代表</div>
            <div className="mt-2 text-sm text-muted">日置 智之</div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">所在地</div>
            <div className="mt-2 text-sm text-muted">〒710-0253 岡山県倉敷市新倉敷駅前3-47</div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">連絡先</div>
            <div className="mt-2 text-sm text-muted">{SITE.contactEmail}</div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
