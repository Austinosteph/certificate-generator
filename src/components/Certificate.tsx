import { Award, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

interface CertificateProps {
	name: string;
}

export const Certificate = ({ name }: CertificateProps) => {
	const handleDownload = async () => {
		const certificateElement = document.getElementById('certificate');

		if (!certificateElement) {
			toast.error('Certificate not found');
			return;
		}

		try {
			toast.loading('Generating certificate...');

			const canvas = await html2canvas(certificateElement, {
				scale: 2,
				backgroundColor: '#ffffff',
				logging: false,
			});

			const link = document.createElement('a');
			link.download = `WIPS_Certificate_${name.replace(/\s+/g, '_')}.png`;
			link.href = canvas.toDataURL('image/png');
			link.click();

			toast.dismiss();
			toast.success('Certificate downloaded successfully!');
		} catch (error) {
			toast.dismiss();
			toast.error('Failed to download certificate');
			console.error('Download error:', error);
		}
	};

	return (
		<section className="py-16 px-4 bg-muted/30">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Your Certificate
					</h2>
					<p className="text-muted-foreground">
						Preview and download your certificate below
					</p>
				</div>

				<div className="mb-8">
					<div
						id="certificate"
						className="bg-white p-12 sm:p-16 rounded-lg shadow-2xl mx-auto"
						style={{
							maxWidth: '800px',
							aspectRatio: '1.414/1',
							position: 'relative',
							border: '12px solid',
							borderImage:
								'linear-gradient(135deg, hsl(220, 70%, 25%), hsl(45, 100%, 50%)) 1',
						}}
					>
						{/* Decorative corners */}
						<div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-yellow-500"></div>
						<div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-yellow-500"></div>
						<div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-yellow-500"></div>
						<div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-yellow-500"></div>

						{/* Content */}
						<div className="text-center space-y-6 relative z-10">
							<div className="flex justify-center">
								<div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-950 to-blue-500 flex items-center justify-center">
									<Award className="w-12 h-12 text-white" />
								</div>
							</div>

							<div>
								<h3 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-2">
									WIPS
								</h3>
								<p className="text-lg text-blue-950/80">
									Workforce Innovation Professional Services
								</p>
							</div>

							<div className="py-8">
								<p className="text-2xl font-light text-foreground mb-6">
									Certificate of Achievement
								</p>
								<p className="text-xl text-blue-950/80 mb-4">
									This certificate is proudly presented to
								</p>
								<h2 className="text-4xl sm:text-5xl font-bold text-blue-950 mb-6 py-4 border-b-2 border-t-2 border-yellow-500/30">
									{name}
								</h2>
								<p className="text-lg text-blue-950/80 leading-relaxed max-w-xl mx-auto">
									For outstanding dedication and commitment to professional
									excellence and continuous improvement
								</p>
							</div>

							<div className="flex justify-between items-end pt-8 max-w-md mx-auto">
								<div className="text-left">
									<div className="w-32 h-px bg-blue-950 mb-2"></div>
									<p className="text-sm text-muted-foreground">
										Authorized Signature
									</p>
								</div>
								<div className="flex items-center gap-2 text-blue-600">
									<CheckCircle2 className="w-6 h-6" />
									<span className="text-sm font-medium">Verified</span>
								</div>
								<div className="text-right">
									<div className="w-32 h-px bg-blue-950 mb-2"></div>
									<p className="text-sm text-muted-foreground">
										{new Date().toLocaleDateString()}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<Button
						onClick={handleDownload}
						size="lg"
						className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-800 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
					>
						<Download className="w-5 h-5 mr-2" />
						Download Certificate
					</Button>
				</div>
			</div>
		</section>
	);
};
