import { Clock, Star } from "lucide-react";

export const AgendaSection = () => {
  return (
    <section id="agenda" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Event Agenda</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully crafted schedule packed with learning and inspiration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border text-center">
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're carefully curating an exciting lineup of keynotes, technical sessions, 
              hands-on workshops, and networking opportunities. The detailed agenda will be 
              published soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>Full Day Event</span>
              </div>
              <div className="hidden sm:block text-muted-foreground">•</div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5" />
                <span>Multiple Tracks</span>
              </div>
            </div>
          </div>

          {/* Placeholder Timeline */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <div className="text-sm font-semibold text-primary mb-2">Morning</div>
              <p className="text-sm text-muted-foreground">Registration & Keynotes</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <div className="text-sm font-semibold text-primary mb-2">Afternoon</div>
              <p className="text-sm text-muted-foreground">Technical Sessions & Workshops</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <div className="text-sm font-semibold text-primary mb-2">Evening</div>
              <p className="text-sm text-muted-foreground">Networking & Closing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
