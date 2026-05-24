#!/bin/bash

echo "🚀 68 RIDERS - Deployment Script"
echo "=================================="
echo ""

# Git kontrolü
if [ ! -d .git ]; then
    echo "📦 Git repository başlatılıyor..."
    git init
    git add .
    git commit -m "Initial commit - 68 Riders website"
    echo "✅ Git repository oluşturuldu!"
else
    echo "✅ Git repository mevcut"
fi

echo ""
echo "📋 Deployment seçenekleri:"
echo "1. Vercel (Önerilen)"
echo "2. Netlify"
echo "3. GitHub'a push"
echo ""

read -p "Seçiminiz (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🔵 Vercel deployment başlatılıyor..."
        echo ""
        
        # Vercel CLI kontrolü
        if ! command -v vercel &> /dev/null; then
            echo "📦 Vercel CLI yükleniyor..."
            npm install -g vercel
        fi
        
        echo "🚀 Vercel'e deploy ediliyor..."
        vercel --prod
        
        echo ""
        echo "✅ Deployment tamamlandı!"
        echo "🌐 Siteniz yayında!"
        ;;
        
    2)
        echo ""
        echo "🟢 Netlify deployment için:"
        echo "1. https://netlify.com adresine git"
        echo "2. 'New site from Git' butonuna tıkla"
        echo "3. GitHub reposunu seç"
        echo "4. Build command: npm run build"
        echo "5. Publish directory: .next"
        echo ""
        read -p "GitHub'a push yapmak ister misin? (y/n): " push
        
        if [ "$push" = "y" ]; then
            git add .
            git commit -m "Deploy to Netlify"
            git push
            echo "✅ GitHub'a push edildi!"
        fi
        ;;
        
    3)
        echo ""
        echo "📤 GitHub'a push ediliyor..."
        git add .
        read -p "Commit mesajı: " message
        git commit -m "$message"
        git push
        echo "✅ GitHub'a push edildi!"
        ;;
        
    *)
        echo "❌ Geçersiz seçim!"
        exit 1
        ;;
esac

echo ""
echo "🎉 İşlem tamamlandı!"
