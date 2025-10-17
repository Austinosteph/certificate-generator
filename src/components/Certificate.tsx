'use client';

import { Award, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState } from 'react';


interface CertificateProps {
	name: string;
}

export const Certificate = ({ name }: CertificateProps) => {
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownloadHtml = () => {
		const certificateElement = document.getElementById('certificate');
		if (!certificateElement) {
			toast.error('Certificate not found');
			return;
		}

		try {
			setIsDownloading(true);

			const fullHtml = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Certificate - ${name}</title>
                    <style>
                        /* Minimal styling to center it and make it look somewhat decent */
                        body {
                            font-family: sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            margin: 0;
                            background-color: #f0f0f0;
                        }
                        /* You would ideally copy the relevant Tailwind CSS output here */
                        .certificate-container {
                            /* Add styles corresponding to the original component's styling for #certificate */
                            max-width: 800px; 
                            aspect-ratio: 1.414/1;
                            margin: 20px;
                            padding: 4rem; 
                            background-color: white;
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                            border: 4px solid #f59e0b; /* Yellow border for corners */
                            position: relative;
                        }
                        .certificate-container h2 { font-size: 2.5rem; }
                        .certificate-container h3 { font-size: 3rem; color: #1e3a8a; }
                        /* ... more CSS would be needed for a perfect match ... */
                    </style>
                </head>
                <body>
                    <div class="certificate-container">
                        ${certificateElement.innerHTML}
                    </div>
                </body>
                </html>
            `;

			const blob = new Blob([fullHtml], { type: 'application/msword' });
			const url = URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.download = `Certificate_${name}.doc`;
			link.href = url;
			link.click();

			URL.revokeObjectURL(url);

			toast.dismiss();
			toast.success('Downloaded successfully!');
		} catch (err) {
			console.error(err);
			toast.dismiss();
			toast.error('Error generating certificate');
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto max-w-4xl px-2">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						Your Certificate
					</h2>
					<p className="text-gray-600">
						Preview and download your certificate below
					</p>
				</div>

				<div
					className="p-[12px] rounded-lg shadow-2xl mb-8"
					style={{
						background:
							'linear-gradient(135deg, rgb(25, 60, 150), rgb(255, 215, 0))',
					}}
				>
					<div
						id="certificate"
						className="bg-white p-12 sm:p-16 rounded-lg relative"
						style={{
							maxWidth: '800px',
							aspectRatio: '1.414/1',
							margin: '0 auto',
						}}
					>
						<div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-yellow-500"></div>
						<div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-yellow-500"></div>
						<div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-yellow-500"></div>
						<div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-yellow-500"></div>

						<div className="text-center space-y-6 relative z-10">
							<div className="flex justify-center">
								<div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
									<Award className="w-12 h-12 text-white" />
								</div>
							</div>

							<h3 className="text-4xl sm:text-5xl font-bold text-blue-900">
								WIPS
							</h3>
							<p className="text-lg text-gray-600">
								Workforce Innovation Professional Services
							</p>

							<div className="py-8">
								<p className="text-2xl font-light text-gray-900 mb-6">
									Certificate of Achievement
								</p>
								<p className="text-xl text-gray-700 mb-4">
									This certificate is proudly presented to
								</p>
								<h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 py-4 border-b-2 border-t-2 border-yellow-500/30">
									{name}
								</h2>
								<p className="text-lg text-gray-700 max-w-xl mx-auto">
									For outstanding dedication and commitment to excellence.
								</p>
							</div>

							<div className="flex justify-between pt-8 max-w-md mx-auto">
								<div>
									<div className="w-20 h-px bg-blue-900 mb-2"></div>
									<p className="text-sm text-gray-600">Signature</p>
								</div>
								<div className="flex items-center gap-1 text-blue-600">
									<CheckCircle2 className="w-6 h-6" />
									<span className="text-sm font-medium">Verified</span>
								</div>
								<div>
									<div className="w-20 h-px bg-blue-900 mb-2"></div>
									<p className="text-sm text-gray-600">
										{new Date().toLocaleDateString()}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<Button
						onClick={handleDownloadHtml}
						disabled={isDownloading}
						className="h-12 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"
					>
						<Download className="w-5 h-5 mr-2" />
						{isDownloading ? 'Downloading...' : 'Download Certificate'}
					</Button>
				</div>
			</div>
		</section>
	);
};
