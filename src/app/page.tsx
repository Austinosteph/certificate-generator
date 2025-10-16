'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { CertificateForm } from '@/components/CertificateForm';
import { Certificate } from '@/components/Certificate';

const Index = () => {
	const [generatedName, setGeneratedName] = useState<string>('');

	const handleGenerate = (name: string) => {
		setGeneratedName(name);
		// Smooth scroll to certificate
		setTimeout(() => {
			const certificateElement = document.getElementById('certificate');
			if (certificateElement) {
				certificateElement.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}
		}, 100);
	};

	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<CertificateForm onGenerate={handleGenerate} />
			{generatedName && <Certificate name={generatedName} />}
		</div>
	);
};

export default Index;
