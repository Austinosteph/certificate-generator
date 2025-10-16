import { Award } from 'lucide-react';

export const Hero = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 px-4 sm:py-32">
			<div className="absolute inset-0 bg-blue-900 opacity-75"></div>

			<div className="container mx-auto max-w-6xl relative z-10">
				<div className="text-center">
					<div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-yellow-500/20 backdrop-blur-sm">
						<Award className="w-10 h-10 text-yellow-500" />
					</div>

					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
						WIPS Certificate Generator
					</h1>

					<p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
						Create professional certificates instantly. Enter your name and
						generate a beautiful, downloadable certificate in seconds.
					</p>

					<div className="flex flex-wrap gap-3 justify-center text-sm text-primary-foreground/80">
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
							Instant Generation
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
							Professional Design
						</div>
						<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
							<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
							Easy Download
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
